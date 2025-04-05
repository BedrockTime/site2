import { useState } from "react"

const Header = () => {
  const [cat, setCat] = useState(false)
  const [man, setMan] = useState(0)

  const Manufacturers = () => {
    if (man === 0) {
      return(
        <div className="div_cat">
          <p className="cat_p">Asus</p>
          <p className="cat_p">Gigabyte</p>
          <p className="cat_p">MSI</p>
          <p className="cat_p">AMD</p>
          <p className="cat_p">ASSRock</p>
        </div>
      )
    } else if (man === 1) {
      return(
        <div className="div_cat">
          <p className="cat_p">AMD</p>
          <p className="cat_p">Intel</p>
        </div>
      )
    } else if (man === 2) {
      return(
        <div className="div_cat">
          <p className="cat_p">Samsung</p>
          <p className="cat_p">Kingston</p>
          <p className="cat_p">Corsair</p>
          <p className="cat_p">Seagate</p>
          <p className="cat_p">Toshiba</p>
        </div>
      )
    } else if (man === 3) {
      return(
        <div className="div_cat">
          <p className="cat_p">Kingston</p>
          <p className="cat_p">Corsair</p>
          <p className="cat_p">A4Tech</p>
          <p className="cat_p">ADATA</p>
        </div>
      )
    } else if (man === 4) {
      return(
        <div className="div_cat">
          <p className="cat_p">Asus</p>
          <p className="cat_p">MSI</p>
          <p className="cat_p">Gigabyte</p>
          <p className="cat_p">ASSRock</p>
        </div>
      )
    } else if (man === 5) {
      return(
        <div className="div_cat">
          <p className="cat_p">Corsair</p>
          <p className="cat_p">Asus</p>
          <p className="cat_p">KCAS</p>
          <p className="cat_p">MSI</p>
          <p className="cat_p">Deep Cool</p>
        </div>
      )
    } else if (man === 6) {
      return(
        <div className="div_cat">
          <p className="cat_p">Corsair</p>
          <p className="cat_p">DeepCool</p>
          <p className="cat_p">Zalman</p>
          <p className="cat_p">Cooler Master</p>
          <p className="cat_p">MSI</p>
        </div>
      )
    } else if (man === 7) {
      return(
        <div className="div_cat">
          <p className="cat_p">Deep Cool</p>
          <p className="cat_p">Asus</p>
          <p className="cat_p">Corsair</p>
          <p className="cat_p">Cooler Master</p>
        </div>
      )
    }
  }

  const Catalog = () => {
    if (cat) {
      return(
        <div className="cat_osn">
          <div className="catalog">
            <p onMouseOver={() => {setMan(0)}} className="cat_p">Видеокарты</p>
            <p onMouseOver={() => {setMan(1)}} className="cat_p">Процессоры</p>
            <p onMouseOver={() => {setMan(2)}} className="cat_p">Твердотельные накопители</p>
            <p onMouseOver={() => {setMan(3)}} className="cat_p">Оперативная память</p>
            <p onMouseOver={() => {setMan(4)}} className="cat_p">Материнские платы</p>
            <p onMouseOver={() => {setMan(5)}} className="cat_p">Блоки питания</p>
            <p onMouseOver={() => {setMan(6)}} className="cat_p">Корпуса</p>
            <p onMouseOver={() => {setMan(7)}} className="cat_p">Системы охлаждения</p>
          </div>
          <div>
            <Manufacturers/>
          </div>
        </div>
      )
    }
  }

  return(
    <div className="headercat">
      <div className="header">
        <div className="name_div">
          <div className="name">
            <p className="head_p">Не</p>
            <h1 className="head_p">DNS</h1>
          </div>
          <div className="name_catalog">
            <p onClick={() => setCat(!cat)} className="cat_button">Каталог</p>
          </div>
        </div>
        <div className="panel">
          <p className="head_p2">Корзина</p>
          <p className="head_p2">Войти</p>
        </div>
      </div>
      <Catalog/>
    </div>
  )
}

export default Header