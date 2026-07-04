import './App.css'
import SearchIcon from './assets/images/search-line (2).svg'
import UserIcon from './assets/images/user-line (1).svg'
import GlobalIcon from './assets/images/global-line.svg'
import SunIcon from './assets/images/sun-line.svg'
import MoonIcon from './assets/images/moon-line.svg'
import Prezident from './assets/images/prezident.png'

const featuredCards = [
  {
    tag: 'Reklama',
    title: 'SONGGI YANGILIKLAR ',
    time: 'Bugun, 16:30',
  },
  {
    tag: 'Dunyo',
    title: 'Kiyevdagi “O‘zbek palovi №1” restorani Rossiya hujumiga uchradi (video)',
    time: 'Bugun, 15:25',
  },
  {
    tag: 'Dunyo',
    title: 'Turkiyada daryodan O‘zbekiston fuqarosining jasadi topildi',
    time: 'Bugun, 12:00',
  },
]

const uzbekNews = [
  { tag: 'Siyosat', title: 'O‘zbekiston va Gruziya endi strategik sherik bo‘ldi', time: 'Bugun, 12:30' },
  { tag: 'Iqtisodiyot', title: 'Yangi qonun ijrosi O‘zbekistonda biznesni o‘zgartiradimi?', time: 'Bugun, 10:15' },
  { tag: 'Madaniyat', title: 'Gruziya poytaxtida Alisher Navoiy haykali ochildi', time: 'Kecha, 16:20' },
]

const worldNews = [
  { tag: 'Dunyo', title: 'Pokistonda avtobus jarlikka quladi, 40 kishi halok bo‘ldi (video)', time: 'Bugun, 10:30' },
  { tag: 'Siyosat', title: 'Suriya va Rossiya orasida yangi protokol imzolandi', time: 'Bugun, 09:45' },
  { tag: 'Texnologiya', title: 'Osiyo sun’iy intellekt giganti Toshkentda: iFLYTEK', time: 'Kecha, 16:30' },
]

function App() {
  return (
    <div className="app-shell">
      <div className="top-bar">
        <div className="container top-bar-inner">
          <div className="top-left">
            <img src={SunIcon} alt="location" className="icon" />
            <span className="city">--Toshkent</span>
            <span className="currency">USD: 12,178.85 so‘m</span>
            <span className="currency">EUR: 14,053.18 so‘m</span>
            <span className="currency">RUB: 146.54 so‘m</span>
          </div>
          <div className="top-right">
            <img src={SunIcon} alt="sun" className="icon" />
            <img src={MoonIcon} alt="moon" className="icon" />
            <span className="language">O‘zbekcha</span>
          </div>
        </div>
      </div>

      <header className="header">
        <div className="container header-inner">
          <h1 className="logo">DARYO</h1>
          <nav className="nav">
            <a href="#" className="nav-link">O‘zbekiston</a>
            <a href="#" className="nav-link">Markaziy Osiyo</a>
            <a href="#" className="nav-link">Dunyo</a>
            <a href="#" className="nav-link">Pul</a>
            <a href="#" className="nav-link">Madaniyat</a>
            <a href="#" className="nav-link">Sport</a>
          </nav>
          <div className="header-actions">
            <div className="search-wrap">
              <img src={SearchIcon} alt="search" className="icon small" />
            </div>
            <button className="profile">
              <img src={UserIcon} alt="user" className="icon" />
              <span>Kabinet</span>
            </button>
          </div>
        </div>
      </header>

      <main className="main-content">
        <section className="hero-grid">
          <article className="hero-card big-card">
            <div className="hero-badge">Asosiy</div>
            <img src={Prezident} alt="prezident img" className='hero-banner' />
            <h2>Sergelida yiliga 18,4 ml kVt soat elektr beruvchi yangi energiya markazi ishga tushdi</h2>
            <p>Shavkat Mirziyoyev Sergeli tumanidagi “O‘zgarish” mahallasida boʻlib, hududdagi yangi infratuzilma va yerusti metrosi ostida tashkil etilgan savdo obyektlari faoliyatini koʻzdan kechirdi. Bu haqda prezident matbuot xizmati .</p>
            <div className="hero-meta">
              <span className="time">Bugun, 18:40</span>
            </div>
          </article>

          <div className="side-stack">
            {featuredCards.map((item, index) => (
              <article className={`mini-card ${index === 0 ? 'accent' : ''}`} key={item.title}>
                <div className="mini-text">
                  <span className="category">{item.tag}</span>
                  <h3>{item.title}</h3>
                  <p className="time">{item.time}</p>
                </div>
              </article>
            ))}
            {featuredCards.map((item, index) => (
              <article className={`mini-card ${index === 0 ? 'accent' : ''}`} TAVSIYALAR>
                <div className="mini-text">
                  <span className="category">{item.tag}</span>
                  <h3>{item.title}</h3>
                  <p className="time">{item.time}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="news-layout">
          <div className="news-column">
            <div className="section-heading">
              <h3>O‘zbekiston</h3>
              <a href="#">Barchasi</a>
            </div>
            <div className="news-list">
              {uzbekNews.map((item) => (
                <article className="news-item" key={item.title}>
                  <span className="category">{item.tag}</span>
                  <h4>{item.title}</h4>
                  <p className="time">{item.time}</p>
                </article>
              ))}
            </div>
          </div>

          <div className="news-column">
            <div className="section-heading">
              <h3>Dunyo</h3>
              <a href="#">Barchasi</a>
            </div>
            <div className="news-list">
              {worldNews.map((item) => (
                <article className="news-item" key={item.title}>
                  <span className="category">{item.tag}</span>
                  <h4>{item.title}</h4>
                  <p className="time">{item.time}</p>
                </article>
              ))}
            </div>
          </div>

          <aside className="sidebar">
            <div className="promo-box">
              <p className="promo-label">Premium</p>
              <h3>Yaqin kelajakdagi texnologik tendensiyalarni kuzating</h3>
              <p>Sun’iy intellekt, avtomobil sanoati va raqamli moliya bo‘yicha eng muhim yangiliklar.</p>
            </div>
            <div className="sidebar-card">
              <h4>Eng ko‘p o‘qilgan</h4>
              <ul>
                <li>Qizil mo‘ydagi yangi loyihalar</li>
                <li>Toshkentdagi arxitektura yangiliklari</li>
                <li>Sportdagi yangi transferlar</li>
                <li>Ehtimollar nazariyasi. Bizda qanday imkoniyat bor ?</li>
              </ul>
            </div>
          </aside>
        </section>

        <section className="news-layout">
          <div className="news-column">
            <div className="section-heading">
              <h3>Daryo+</h3>
              <a href="#">Barchasi</a>
            </div>
            <div className="news-list">
              {uzbekNews.map((item) => (
                <article className="news-item" key={item.title}>
                  <span className="category">{item.tag}</span>
                  <h4>{item.title}</h4>
                  <p className="time">{item.time}</p>
                </article>
              ))}
            </div>
          </div>

          <div className="news-column">
            <div className="section-heading">
              <h3>Layfstayl va Madaniyat</h3>
              <a href="#">Barchasi</a>
            </div>
            <div className="news-list">
              {worldNews.map((item) => (
                <article className="news-item" key={item.title}>
                  <span className="category">{item.tag}</span>
                  <h4>{item.title}</h4>
                  <p className="time">{item.time}</p>
                </article>
              ))}
            </div>
          </div>

          <aside className="sidebar">
            <div className="promo-box">
              <p className="promo-label">Hindiston</p>
              <h3>Hindistonda er vazn sep sabab xotinini bo'g'ib o'ldirdi</h3>
              <p>Kecha, 10:10</p>
            </div>
            <div className="sidebar-card">
              <h4>Mashhur teglar</h4>
              <ul>
                <li>Dunyo</li>
                <li>Uzbekiston</li>
                <li>Iqtisodiyot</li>
                <li>Pul</li>
                <li>Markaziy Osiyo</li>
                <li>Layfstayl</li>
              </ul>
            </div>
          </aside>
        </section>

        <section className="news-layout">
          <div className="news-column">
            <div className="section-heading">
              <h3>Kitob</h3>
              <a href="#">Barchasi</a>
            </div>
            <div className="news-list">
              {uzbekNews.map((item) => (
                <article className="news-item" key={item.title}>
                  <span className="category">{item.tag}</span>
                  <h4>{item.title}</h4>
                  <p className="time">{item.time}</p>
                </article>
              ))}
            </div>
          </div>

          <div className="news-column">
            <div className="section-heading">
              <h3>Talim</h3>
              <a href="#">Barchasi</a>
            </div>
            <div className="news-list">
              {worldNews.map((item) => (
                <article className="news-item" key={item.title}>
                  <span className="category">{item.tag}</span>
                  <h4>{item.title}</h4>
                  <p className="time">{item.time}</p>
                </article>
              ))}
            </div>
          </div>

          <aside className="sidebar">
            <div className="promo-box">
              <p className="promo-label">Ofis</p>
              <h3>Ofis hodimlar uchun turib uchish haydalanadigan velosipedlar yaratildi</h3>
              <p>Kecha, 19:50</p>
            </div>
            <div className="promo-box">
              <p className="promo-label">Qo'shni</p>
              <h3>Yaxshi qo'shnilarni sotib olsa boladimi ? AQSHda yangi uyga kochib keganlar...</h3>
              <p>Bugun, 12:20</p>
            </div>
          </aside>
        </section>

        <section className="news-layout">
          <div className="news-column">
            <div className="section-heading">
              <h3>Pul</h3>
              <a href="#">Barchasi</a>
            </div>
            <div className="news-list">
              {uzbekNews.map((item) => (
                <article className="news-item" key={item.title}>
                  <span className="category">{item.tag}</span>
                  <h4>{item.title}</h4>
                  <p className="time">{item.time}</p>
                </article>
              ))}
            </div>
          </div>

          <div className="news-column">
            <div className="section-heading">
              <h3>Shou - Biznes</h3>
              <a href="#">Barchasi</a>
            </div>
            <div className="news-list">
              {worldNews.map((item) => (
                <article className="news-item" key={item.title}>
                  <span className="category">{item.tag}</span>
                  <h4>{item.title}</h4>
                  <p className="time">{item.time}</p>
                </article>
              ))}
            </div>
          </div>

          <aside className="sidebar">
            <div className="promo-box">
              <p className="promo-label">20 foiz</p>
              <h3>Ozbekistonning yalpi tashqi qarzi bir yilda 20 foizga kopaydi</h3>
              <p>18:55 / 02.07.2026</p>
            </div>
            <div className="promo-box">
              <p className="promo-label">Jorjina Rodriges</p>
              <h3>Jorjina Rodriges ozinign ilk kiyim brendiga asos soldi</h3>
              <p>Kecha, 18:10</p>
            </div>
          </aside>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-inner">
          <div className="footer-block">
            <h4>Daryo.uz</h4>
            <p>So‘nggi yangiliklar, tezkor xabarlar va eng muhim voqealar.</p>
          </div>
          <div className="footer-block">
            <h4>Bo‘limlar</h4>
            <ul>
              <li>O‘zbekiston</li>
              <li>Dunyo</li>
              <li>Pul</li>
              <li>Madaniyat</li>
              <li>Sport</li>
            </ul>
          </div>
          <div className="footer-block">
            <h4>Ijtimoiy tarmoqlar</h4>
            <ul>
              <li>Telegram</li>
              <li>Instagram</li>
              <li>YouTube</li>
              <li>Facebook</li>
            </ul>
          </div>
          <div className="footer-block">
            <h4>Kontakt</h4>
            <ul>
              <li>info@daryo.uz</li>
              <li>+998 71 200 00 00</li>
              <li>Toshkent, O‘zbekiston</li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
