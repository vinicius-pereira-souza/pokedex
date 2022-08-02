import style from './SubContainer.module.css'

function SubContainer({children}) {
  return (
    <div className={style.container}>
      {children}
    </div>
  )
}

export default SubContainer