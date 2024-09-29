import type { ComponentProps } from 'react'
import React from 'react'

type InputProps = ComponentProps<'input'> & {
  labelText: string
  htmlFor: string
  dataTestId?: string
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ labelText, htmlFor, dataTestId = 'input', ...rest }, ref) => {
    return (
      <div className="relative z-0 rounded-md border-2 border-blue-700 p-[6px] px-2">
        <input
          className="peer block w-full appearance-none border-0 bg-transparent pt-2.5 font-league text-sm text-black focus:border-blue-600 focus:outline-none focus:ring-0"
          data-testid={dataTestId}
          ref={ref}
          {...rest}
        />
        <label
          htmlFor={htmlFor}
          className="absolute top-4 -z-10 -translate-y-4 transform font-league text-sm font-bold uppercase text-blue-700 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-4 rtl:peer-focus:left-auto rtl:peer-focus:translate-x-1/4"
        >
          {labelText}
        </label>
      </div>
    )
  },
)

export { Input }
