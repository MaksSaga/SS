import { FC } from 'react'
import { NavLink } from 'react-router-dom'
import { cn } from '../../../../../utils/tailwind/cn.ts'
import { IMiniModal, MiniModal } from '../../../../atoms/Modal/Mini/MiniModal.tsx'
import { category } from './catalogModalService.tsx'

export const CatalogModal: FC<IMiniModal> = ({ isActive, setIsActive, position, parentLink }) => {
  return (
    <MiniModal
      isActive={isActive}
      setIsActive={setIsActive}
      parentLink={parentLink}
      position={position}
    >
      {category
        ? category.map((item, index) => (
            <NavLink
              key={index}
              className={({ isActive }) =>
                cn(
                  'stroke-iron-400 flex items-center gap-1 text-iron-400 hover:text-iron-600 hover:stroke-iron-600 transition-colors',
                  { 'text-iron-600 stroke-iron-600': isActive }
                )
              }
              to={`category/${item.category}`}
            >
              {item.label}
            </NavLink>
          ))
        : ''}
    </MiniModal>
  )
}
