import "./Contatos.css"

const Contatos = () => {
  return (
    <div className="ctt_container" id="contatos">
        <h2>Contatos</h2>
        <ul className="ctt_list">
            <li><a href="https://api.whatsapp.com/send?phone=5577991115142" className="btn_whatsapp btn_main">Whatsapp</a></li>
            <li><a href="https://t.me/Rpvsuporte" className="btn_telegram btn_main">Telegram</a></li>
            <li><a href="https://www.instagram.com/di_developer/" className="btn_instagram btn_main">Instagram</a></li>
        </ul>
    </div>
  )
}

export default Contatos