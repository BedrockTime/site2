import Link from "next/link"

const Login = () => {
    return(
        <div className="backgr_div">
            <div className="backgr">
            <Link href="/" className="back">Назад</Link>
                <h2 className="log_text_h2">Войдите,  чтобы  начать</h2>
                <div className="log_text_div">
                  <p className="log_str_text_p">Ваш E-mail</p>
                  <input className="input"/>
                  <p className="log_str_text_p">Ваш пароль</p>
                  <input className="input"/>
                </div>
            </div>
        </div>
    )
}

export default Login