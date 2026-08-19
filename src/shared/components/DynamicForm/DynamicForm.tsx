import type { FormEvent } from "react";

import { FieldType } from "../../interfaces/fieldType.interface";
import type { FormField } from "../../interfaces/formField.interface";

import Form from "../Form/Form";

type FormValue = string | number | boolean;

type FormValues<T extends object> = {
  [K in keyof T]: FormValue;
};

interface DynamicFormProps<T extends object> {
  fields: FormField[];
  values: FormValues<T>;

  onChange: (
    field: keyof T,
    value: FormValue
  ) => void;

  onSubmit?: (
    event: FormEvent<HTMLFormElement>
  ) => void;
}

/**
 * Tailwind classes for supported column spans.
 *
 * We use a static map instead of:
 * `sm:col-span-${field.layout?.colSpan}`
 *
 * because Tailwind needs to detect the classes
 * during build time.
 */
const colSpanClasses: Record<number, string> = {
  1: "sm:col-span-1",
  2: "sm:col-span-2",
  3: "sm:col-span-3",
  4: "sm:col-span-4",
};

export default function DynamicForm<T extends object>({
  fields,
  values,
  onChange,
  onSubmit,
}: DynamicFormProps<T>) {
  /**
   * Group fields that have the same layout.group.
   *
   * Example:
   *
   * phoneCode -> group: "phone"
   * phone     -> group: "phone"
   *
   * These fields will be rendered together.
   */
  const groupedFields = fields.reduce<
    Record<string, FormField[]>
  >((groups, field) => {
    const groupName =
      field.layout?.group ?? field.id;

    if (!groups[groupName]) {
      groups[groupName] = [];
    }

    groups[groupName].push(field);

    return groups;
  }, {});

  return (
    <Form onSubmit={onSubmit}>
      <div className="space-y-5">
        {Object.entries(groupedFields).map(
          ([groupName, groupFields]) => {
            const isGroup =
              groupFields.length > 1 &&
              Boolean(groupFields[0].layout?.group);

            if (isGroup) {
              return (
                <div
                  key={groupName}
                  className={`
                    grid
                    grid-cols-1
                    sm:grid-cols-4
                    ${
                      groupName === "phone"
                        ? "gap-0"
                        : "gap-5"
                    }
                  `}
                >
                  {groupFields.map((field) =>
                    renderField(
                      field,
                      values,
                      onChange
                    )
                  )}
                </div>
              );
            }

            return renderField(
              groupFields[0],
              values,
              onChange
            );
          }
        )}
      </div>
    </Form>
  );
}

/* =====================================================
   Render Field
===================================================== */

function renderField<T extends object>(
  field: FormField,
  values: FormValues<T>,
  onChange: (
    field: keyof T,
    value: FormValue
  ) => void
) {
  const value =
    values[field.id as keyof T] ??
    field.value ??
    "";

  const colSpan =
    colSpanClasses[
      field.layout?.colSpan ?? 4
    ] ?? "sm:col-span-4";

  const isPhoneGroup =
    field.layout?.group === "phone";

  const isPhoneCode =
    field.id === "phoneCode";

  const isPhoneNumber =
    field.id === "phone";

  const wrapperClass = `
    ${colSpan}
    ${field.className ?? ""}
  `;

  switch (field.type) {
    /* =================================================
       TEXT / EMAIL / PASSWORD / NUMBER
    ================================================= */

    case FieldType.Text:
    case FieldType.Email:
    case FieldType.Password:
    case FieldType.Number:
      return (
        <div
          key={field.id}
          className={wrapperClass}
        >
          {!field.layout?.hideLabel && (
            <label
              htmlFor={field.id}
              className="mb-2 block text-sm font-semibold text-[#1F2937]"
            >
              {field.label}
            </label>
          )}

          <input
            id={field.id}
            name={field.id}
            type={field.type}
            value={value as string | number}
            placeholder={field.placeholder}
            disabled={field.disabled}
            readOnly={field.readonly}
            onChange={(event) =>
              onChange(
                field.id as keyof T,
                event.target.value
              )
            }
            className={`
              h-12 w-full
              bg-[#F0F1F5]
              px-4
              text-sm
              outline-none
              transition
              focus:ring-2
              focus:ring-[#D29A21]

              ${
                isPhoneNumber
                  ? "rounded-l-none rounded-r-md"
                  : "rounded-md"
              }
            `}
          />
        </div>
      );

    /* =================================================
       SELECT
    ================================================= */

case FieldType.Select:
  return (
    <div
      key={field.id}
      className={`relative ${wrapperClass}`}
    >
      {!field.layout?.hideLabel && (
        <label
          htmlFor={field.id}
          className="
            mb-2
            block
            text-sm
            font-semibold
            text-[#1F2937]
          "
        >
          {field.label}
        </label>
      )}

      <div className="relative">
        <select
          id={field.id}
          name={field.id}
          value={value as string}
          disabled={field.disabled}
          onChange={(event) =>
            onChange(
              field.id as keyof T,
              event.target.value
            )
          }
          className={`
            h-12
            w-full
            appearance-none
            text-sm
            outline-none
            transition
            focus:ring-2
            focus:ring-[#D29A21]

            ${
              isPhoneGroup && isPhoneCode
                ? `
                  rounded-l-md
                  rounded-r-none
                  bg-[#F0F1F5]
                  pl-9
                  pr-3
                  font-medium
                  text-[#374151]
                `
                : `
                  rounded-md
                  bg-[#F0F1F5]
                  px-4
                  pr-10
                `
            }
          `}
        >
          {field.placeholder && (
            <option
              value=""
              disabled
            >
              {field.placeholder}
            </option>
          )}

          {field.options?.map((option) => (
            <option
              key={option.value}
              value={option.value}
            >
              {option.label}
            </option>
          ))}
        </select>

        {/* Phone arrow - LEFT */}
        {isPhoneGroup && isPhoneCode ? (
          <span
            className="
              pointer-events-none
              absolute
              left-3
              top-1/2
              flex
              -translate-y-1/2
              items-center
              justify-center
              text-[#6B7280]
            "
            aria-hidden="true"
          >
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="m6 9 6 6 6-6" />
            </svg>
          </span>
        ) : (
          /* Normal select arrow - RIGHT */
          <span
            className="
              pointer-events-none
              absolute
              right-3
              top-1/2
              flex
              -translate-y-1/2
              items-center
              justify-center
              text-[#6B7280]
            "
            aria-hidden="true"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="m6 9 6 6 6-6" />
            </svg>
          </span>
        )}
      </div>
    </div>
  );      return (
        <div
          key={field.id}
          className={`relative ${wrapperClass}`}
        >
          {!field.layout?.hideLabel && (
            <label
              htmlFor={field.id}
              className="mb-2 block text-sm font-semibold text-[#1F2937]"
            >
              {field.label}
            </label>
          )}

          <div className="relative">
            <select
              id={field.id}
              name={field.id}
              value={value as string}
              disabled={field.disabled}
              onChange={(event) =>
                onChange(
                  field.id as keyof T,
                  event.target.value
                )
              }
              className={`
                h-12
                w-full
                appearance-none
                px-4
                pr-10
                text-sm
                outline-none
                transition
                focus:ring-2
                focus:ring-[#D29A21]

                ${
                  isPhoneGroup && isPhoneCode
                    ? `
                      rounded-l-md
                      rounded-r-none
                      bg-[#D9DADD]
                      font-medium
                      text-[#374151]
                    `
                    : "rounded-md bg-[#F0F1F5]"
                }
              `}
            >
              {!field.value && (
                <option
                  value=""
                  disabled
                >
                  {field.placeholder ??
                    `Select ${field.label}`}
                </option>
              )}

              {field.options?.map((option) => (
                <option
                  key={option.value}
                  value={option.value}
                >
                  {option.label}
                </option>
              ))}
            </select>

            {/* Custom Arrow */}
            <span
              className={`
                pointer-events-none
                absolute
                right-3
                top-1/2
                flex
                -translate-y-1/2
                items-center
                justify-center
                text-[#6B7280]
              `}
              aria-hidden="true"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m6 9 6 6 6-6" />
              </svg>
            </span>
          </div>
        </div>
      );

    /* =================================================
       CHECKBOX
    ================================================= */

    case FieldType.Checkbox:
      return (
        <div
          key={field.id}
          className={wrapperClass}
        >
          <div className="flex items-start gap-2">
            <input
              id={field.id}
              name={field.id}
              type="checkbox"
              checked={value === true}
              disabled={field.disabled}
              onChange={(event) =>
                onChange(
                  field.id as keyof T,
                  event.target.checked
                )
              }
              className="
                mt-0.5
                h-4
                w-4
                shrink-0
                cursor-pointer
                accent-[#D29A21]
              "
            />

            <label
              htmlFor={field.id}
              className="
                cursor-pointer
                text-sm
                text-[#374151]
              "
            >
              {field.label}
            </label>
          </div>

          {(field.description ||
            field.descriptionLink) && (
            <p className="mt-2 pl-6 text-xs text-[#9CA3AF]">
              {field.description}{" "}

              {field.descriptionLink && (
                <a
                  href={
                    field.descriptionLink.href
                  }
                  className="
                    font-semibold
                    text-[#D29A21]
                    hover:underline
                  "
                >
                  {
                    field.descriptionLink
                      .label
                  }
                </a>
              )}
            </p>
          )}
        </div>
      );

    /* =================================================
       TEXTAREA
    ================================================= */

    case FieldType.Textarea:
      return (
        <div
          key={field.id}
          className={wrapperClass}
        >
          {!field.layout?.hideLabel && (
            <label
              htmlFor={field.id}
              className="
                mb-2
                block
                text-sm
                font-semibold
                text-[#1F2937]
              "
            >
              {field.label}
            </label>
          )}

          <textarea
            id={field.id}
            name={field.id}
            value={value as string}
            placeholder={field.placeholder}
            disabled={field.disabled}
            readOnly={field.readonly}
            onChange={(event) =>
              onChange(
                field.id as keyof T,
                event.target.value
              )
            }
            className="
              min-h-30
              w-full
              rounded-md
              bg-[#F0F1F5]
              px-4
              py-3
              text-sm
              outline-none
              transition
              focus:ring-2
              focus:ring-[#D29A21]
            "
          />
        </div>
      );

    /* =================================================
       DATE
    ================================================= */

    case FieldType.Date:
      return (
        <div
          key={field.id}
          className={wrapperClass}
        >
          {!field.layout?.hideLabel && (
            <label
              htmlFor={field.id}
              className="
                mb-2
                block
                text-sm
                font-semibold
                text-[#1F2937]
              "
            >
              {field.label}
            </label>
          )}

          <input
            id={field.id}
            name={field.id}
            type="date"
            value={value as string}
            disabled={field.disabled}
            readOnly={field.readonly}
            onChange={(event) =>
              onChange(
                field.id as keyof T,
                event.target.value
              )
            }
            className="
              h-12
              w-full
              rounded-md
              bg-[#F0F1F5]
              px-4
              text-sm
              outline-none
              transition
              focus:ring-2
              focus:ring-[#D29A21]
            "
          />
        </div>
      );

    /* =================================================
       SWITCH
    ================================================= */

    case FieldType.Switch:
      return (
        <div
          key={field.id}
          className={wrapperClass}
        >
          <label className="flex cursor-pointer items-center gap-3">
            <input
              type="checkbox"
              checked={value === true}
              disabled={field.disabled}
              onChange={(event) =>
                onChange(
                  field.id as keyof T,
                  event.target.checked
                )
              }
              className="sr-only"
            />

            <span
              className={`
                relative
                h-6
                w-11
                rounded-full
                transition
                ${
                  value === true
                    ? "bg-[#D29A21]"
                    : "bg-[#D1D5DB]"
                }
              `}
            >
              <span
                className={`
                  absolute
                  top-1
                  h-4
                  w-4
                  rounded-full
                  bg-white
                  shadow-sm
                  transition-transform
                  ${
                    value === true
                      ? "translate-x-6"
                      : "translate-x-1"
                  }
                `}
              />
            </span>

            <span className="text-sm font-semibold text-[#1F2937]">
              {field.label}
            </span>
          </label>
        </div>
      );

    /* =================================================
       RADIO
    ================================================= */

    case FieldType.Radio:
      return (
        <div
          key={field.id}
          className={wrapperClass}
        >
          {!field.layout?.hideLabel && (
            <label
              className="
                mb-2
                block
                text-sm
                font-semibold
                text-[#1F2937]
              "
            >
              {field.label}
            </label>
          )}

          <div className="space-y-2">
            {field.options?.map(
              (option) => (
                <label
                  key={option.value}
                  className="
                    flex
                    cursor-pointer
                    items-center
                    gap-2
                    text-sm
                    text-[#374151]
                  "
                >
                  <input
                    type="radio"
                    name={field.id}
                    value={option.value}
                    checked={
                      value === option.value
                    }
                    disabled={field.disabled}
                    onChange={(event) =>
                      onChange(
                        field.id as keyof T,
                        event.target.value
                      )
                    }
                    className="accent-[#D29A21]"
                  />

                  {option.label}
                </label>
              )
            )}
          </div>
        </div>
      );

    default:
      return null;
  }
}