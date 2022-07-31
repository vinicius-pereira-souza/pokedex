import style from './ContainerHome.module.css'

function ContainerHome({children}) {
  return (
    <main className={style.container}>
      {children}
    </main>
  )
}

export default ContainerHome