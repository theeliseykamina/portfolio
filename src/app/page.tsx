import Link from "next/link";


export default function Home() {
  return (
    <main className="min-h-screen bg-[#0b0b0b] text-black">
            <section
  id="hero"
  className="min-h-screen bg-[#0b0b0b] flex"
>
  <div className="mx-auto flex flex-1 flex-col justify-between max-w-6xl px-4 py-8 sm:px-10 sm:py-10 lg:px-16">

    {/* ВЕРХНЯЯ ПОЛОСА */}
    <div className="flex items-start justify-between text-[9px] sm:text-xs leading-relaxed tracking-wide uppercase text-[#9f8f80]">
      <div className="max-w-[130px] sm:max-w-[170px]">
        <p>Business Process Engineer</p>
        <p>Systems • Automation • Data</p>
      </div>

      <div className="max-w-[130px] sm:max-w-[170px] text-right">
        <p>Based in</p>
        <p>Saint Petersburg</p>
      </div>
    </div>

    {/* СРЕДИНА: ФОТО + ЛЕЙБЛ */}
    <div className="mt-6 flex flex-1 flex-col gap-4 sm:mt-8 md:mt-12 md:flex-row md:items-start md:gap-8">

      {/* ЛЕЙБЛ возле фото — скрыт на мобилке */}
      <div className="hidden md:flex flex-1 justify-end">
        <div className="mr-3 mt-24 text-[10px] sm:text-[11px] uppercase tracking-[0.32em] text-[#b7a898] leading-[1.1] text-right">
          <p>From chaos</p>
          <p>to process</p>
        </div>
      </div>


      {/* СПРАВА — ФОТО + МЕНЮ */}
      <div className="mx-auto flex flex-col items-center md:ml-auto md:mx-0 md:items-end">
        {/* ФОТО */}
        <div className="h-[280px] w-[200px] sm:h-[400px] sm:w-[280px] lg:h-[460px] lg:w-[320px] overflow-hidden rounded-md border border-[#2a2520] shadow-[0_18px_45px_rgba(0,0,0,0.45)] bg-[#1a1a1a]">
          <img
            src="/me.jpg"
            alt="Elisey Kamina"
            className="h-full w-full object-cover"
          />
        </div>

        {/* МЕНЮ ПОД ФОТО */}
        <nav className="mt-3 flex gap-2 sm:gap-4 sm:mt-4 text-[9px] sm:text-xs uppercase tracking-[0.2em] sm:tracking-[0.3em] text-[#9f8f80]">
          <a href="#hero" className="hover:text-[#d1c7ba]">Home</a>
          <a href="#projects" className="hover:text-[#d1c7ba]">Works</a>
          <a href="#about" className="hover:text-[#d1c7ba]">About</a>
          <a href="#contacts" className="hover:text-[#d1c7ba]">Contacts</a>
        </nav>
      </div>
    </div>

    {/* НИЗ: ИМЯ */}
    <div className="relative mt-6 sm:mt-10 flex items-end justify-center pb-2 sm:pb-4">
      <div className="pointer-events-none absolute left-0 bottom-0 select-none text-2xl sm:text-4xl text-[#d2a27b]">
       ®
      </div>


      <div className="text-center">
        <h1 className="text-[clamp(2.2rem,12vw,6.6rem)] font-extrabold uppercase tracking-tight text-[#d2a27b] leading-none">
        Elisey Kamina
      </h1>


        <p className="mt-2 text-[9px] sm:text-xs uppercase tracking-[0.2em] sm:tracking-[0.26em] text-[#b7a898] px-2">
          I turn manual routines into clear, repeatable systems
        </p>
      </div>
    </div>
  </div>
</section>



      {/* WORKS / PROJECTS */}
<section
  id="projects"
  className="bg-[#11100f] border-t border-[#26201a] py-16 sm:py-24 md:py-28 text-[#d1c7ba]"
>
  <div className="mx-auto max-w-5xl px-4 sm:px-10 lg:px-16">
    {/* Верхний разделитель / заголовок */}
    <div className="mb-6 sm:mb-8 flex items-center gap-3 text-[11px] uppercase tracking-[0.26em] text-[#b7a898]">
      <span className="h-[1px] w-8 sm:w-10 bg-[#b7a898]" />
      <span>Selected work</span>
    </div>

    <h2 className="text-sm font-semibold uppercase tracking-[0.26em] text-[#e0d4c5]">
      Works
    </h2>
    <p className="mt-3 max-w-2xl text-sm text-[#c1b7aa]">
      Прикладные кейсы: автоматизация документов, сбор данных, Telegram-инструменты и сервисы вокруг процессов.
    </p>

    <div className="mt-6 sm:mt-8 grid gap-4 sm:gap-6 md:grid-cols-2">
            <Link
        href="/works/bhbot"
        className="rounded-xl sm:rounded-2xl border border-[#26201a] bg-[#171311] p-4 sm:p-5 shadow-[0_18px_45px_rgba(0,0,0,0.55)] block hover:border-[#b7a898] hover:shadow-[0_22px_55px_rgba(0,0,0,0.7)] transition-all duration-200 cursor-pointer"
      >
        <h3 className="text-sm sm:text-base font-semibold text-[#f0e5d7]">
          BHBot — Telegram-бот для договоров аренды
        </h3>
        <p className="mt-2 text-xs text-[#c1b7aa]">
          Бот задаёт вопросы, сам формирует договор и акт приёма-передачи.
          Время подготовки документа — с 20–30 минут до 2–3 минут.
        </p>
        <p className="mt-3 text-[10px] sm:text-[11px] text-[#9f8f80]">
          Python · Telegram Bot API · docxtpl · Ubuntu · systemd
        </p>
      </Link>

      <Link
  href="/works/tg-leads-parser"
  className="rounded-xl sm:rounded-2xl border border-[#26201a] bg-[#171311] p-4 sm:p-5 shadow-[0_18px_45px_rgba(0,0,0,0.55)] block hover:border-[#b7a898] hover:shadow-[0_22px_55px_rgba(0,0,0,0.7)] transition-all duration-200 cursor-pointer"
>
  <h3 className="text-sm sm:text-base font-semibold text-[#f0e5d7]">
    TG Leads Parser — парсер лидов из Telegram
  </h3>
  <p className="mt-2 text-xs text-[#c1b7aa]">
    Сбор сообщений из групп, фильтрация шума и выделение тёплых запросов. Rule-based скоринг и экспорт готовых лидов.
  </p>
  <p className="mt-3 text-[10px] sm:text-[11px] text-[#9f8f80]">
    Python · Telethon · asyncio · SQLite · TSV export
  </p>
</Link>

    </div>
  </div>
</section>


{/* BUSINESS CONTEXT */}
<section
  className="bg-[#11100f] border-t border-[#26201a] py-12 sm:py-16 text-[#d1c7ba]"
>
  <div className="mx-auto max-w-5xl px-4 sm:px-10 lg:px-16">
    <h2 className="text-sm font-semibold uppercase tracking-[0.26em] text-[#b7a898]">
      Business context
    </h2>

    <div className="mt-4 space-y-4 text-sm text-[#b3a79a] max-w-3xl leading-relaxed">
      <p>
        Полгода работал риелтором в агентстве Be Home и видел процессы изнутри: клиенты, 
        срочные сделки, договоры, постоянные правки, человеческий фактор. Это дало понимание, 
        где именно ломается работа «на земле» и какие инструменты реально помогают.
      </p>
      <p>
        Также работал в автобизнесе (выкуп автомобилей): холодные переговоры, скорость решений, 
        работа с отказами и цифрами. Этот опыт научил проверять гипотезы прагматично и говорить 
        с бизнесом на его языке.
      </p>
      <p>
        Сейчас я собираю портфолио прикладных кейсов: автоматизация документов, сбор и фильтрация 
        данных, Telegram-инструменты и небольшие сервисы вокруг процессов.
      </p>
      <p className="text-[#c1b7aa]">
        Если у вас есть процесс, который «жрёт» время или требует контроля — напишите, 
        разберу и предложу конкретный вариант решения.
      </p>
    </div>
  </div>
</section>


{/* ABOUT */}
<section
  id="about"
  className="bg-[#1a1816] py-12 sm:py-16 text-[#d1c7ba]"
>
  <div className="mx-auto max-w-5xl px-4 sm:px-10 lg:px-16">
    {/* Заголовок */}
    <h2 className="text-sm font-semibold uppercase tracking-[0.26em] text-[#b7a898]">
      About
    </h2>

    {/* Основной текст */}
    <div className="mt-4 space-y-4 text-sm text-[#b3a79a] max-w-3xl leading-relaxed">
      <p>
        Я работаю на стыке бизнес-процессов и технологий: разбираю, где теряется время и деньги, 
        формулирую решение и довожу его до работающего инструмента. Мне важна не «автоматизация 
        ради автоматизации», а понятный результат: меньше ручной рутины, меньше ошибок, 
        быстрее принятие решений.
      </p>

      <p>
        Обычно я действую так: быстро фиксирую процесс и узкое место → собираю простой MVP → 
        тестирую на реальных данных → дорабатываю до стабильного решения и понятной инструкции 
        для пользователя.
      </p>
    </div>
  </div>
</section>

{/* CONTACTS */}
<section
  id="contacts"
  className="bg-[#1a1816] py-12 sm:py-16 text-[#d1c7ba]"
>
  <div className="mx-auto max-w-5xl px-4 sm:px-10 lg:px-16">
    <h2 className="text-sm font-semibold uppercase tracking-[0.26em] text-[#b7a898]">
      Contacts
    </h2>
    <p className="mt-3 text-sm text-[#b3a79a]">
      Можно написать мне напрямую:
    </p>

    <ul className="mt-4 space-y-2 sm:space-y-1 text-sm text-[#e2d7c7]">
      <li>
        Telegram:{" "}
        <a
          href="https://t.me/longboyrd"
          className="text-[#d2a27b] hover:underline"
        >
          @longboyrd
        </a>
      </li>
      <li>
        Email:{" "}
        <a
          href="mailto:elisey-kamina@yandex.ru"
          className="text-[#d2a27b] hover:underline break-all"
        >
          elisey-kamina@yandex.ru
        </a>
      </li>
      <li>
        GitHub:{" "}
        <a
          href="https://github.com/theeliseykamina"
          className="text-[#d2a27b] hover:underline break-all"
        >
          github.com/theeliseykamina
        </a>
      </li>
    </ul>

    <p className="mt-8 text-[11px] text-[#8a7a6f]">
      © {new Date().getFullYear()} Elisey Kamina. Business Process Solutions.
    </p>
  </div>
</section>


    </main>
  );
}