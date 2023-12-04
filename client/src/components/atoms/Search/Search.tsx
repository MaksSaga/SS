import { ChangeEvent, FC, useEffect, useId, useState } from 'react'
import { cn } from '../../../utils/tailwind/cn.ts'
import SearchSVG from 'assets/img/svg/search.svg?react'
import { PrimaryButton } from '../Buttons/PrimaryButton.tsx'

interface ISearch {
  handlerOnChange: (value: string) => void
  handlerOnClick: (value: string) => void
  adaptation?: boolean
}

export const Search: FC<ISearch> = ({ handlerOnChange, handlerOnClick, adaptation = true }) => {
  const uniqueId: string = useId()
  const [value, setValue] = useState<string>('')

  useEffect(() => {
    handlerOnChange(value)
  }, [value])

  return (
    <div className="relative w-1/2 max-lg:w-full">
      <label htmlFor={uniqueId}>
        <SearchSVG className="fill-iron-400 absolute top-1/2 left-3 select-none -translate-y-1/2" />
      </label>
      <input
        id={uniqueId}
        type="text"
        onChange={(event: ChangeEvent<HTMLInputElement>) => setValue(event.target.value)}
        maxLength={60}
        className={cn(
          'w-full text-iron-600 max-lg:min-w-[auto] outline-none border-none rounded-default py-2 placeholder:text-iron-400 pl-10 pr-20 h-full bg-white',
          { 'max-md:pr-2.5': adaptation }
        )}
        value={value}
        placeholder="Я шукаю..."
      />
      <PrimaryButton
        className={cn('absolute h-full top-0 right-0 rounded-l-[0]', {
          'max-md:hidden': adaptation,
        })}
        text="Знайти"
        handler={() => handlerOnClick(value)}
      />
    </div>
  )
}
