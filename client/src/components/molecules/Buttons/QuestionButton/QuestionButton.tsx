import { PrimaryButton } from '../../../atoms/Buttons/PrimaryButton.tsx'
import { FC } from 'react'

interface IQuestionButton {
  className?: string
  disabled?: boolean
}

export const QuestionButton: FC<IQuestionButton> = ({ className, disabled }) => {
  const handlerClick = () => console.log('Чекаємо ваше питання...')

  return (
    <PrimaryButton
      disabled={disabled}
      gray
      big
      text="У мене є питання"
      handler={handlerClick}
      className={className}
    />
  )
}
