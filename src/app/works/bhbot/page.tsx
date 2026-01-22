import Link from "next/link";

export default function BhbotPage() {
  return (
    <main className="min-h-screen bg-[#0b0b0b] text-[#d1c7ba]">
      {/* HERO */}
      <section className="border-b border-[#26201a] bg-[#11100f] py-8 sm:py-12 md:py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-10 lg:px-16">
          <Link
            href="/#projects"
            className="text-[11px] uppercase tracking-[0.26em] text-[#9f8f80] hover:text-[#d2a27b] transition-colors"
          >
            ← Назад к проектам
          </Link>

          <h1 className="mt-6 sm:mt-8 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-[#f0e5d7] leading-tight">
            UNIBOT — автоматизация договоров аренды через Telegram
          </h1>
          
          <p className="mt-3 sm:mt-4 text-sm sm:text-base md:text-lg text-[#d2a27b] max-w-3xl">
            Генерация юридических документов за 2–3 минуты вместо ручной работы и ошибок менеджеров.
          </p>
          
          <p className="mt-3 sm:mt-4 text-xs sm:text-sm text-[#b3a79a] max-w-3xl leading-relaxed">
            UNIBOT — универсальный Telegram-бот, который по диалогу собирает данные, 
            проверяет формат, подставляет их в шаблон и выдаёт готовый договор. 
            Решение выросло из реального запроса бизнеса и было внедрено в рабочие процессы компании.
          </p>

          <p className="mt-4 sm:mt-6 text-xs text-[#8a7a6f]">
            Пример общего бота для ознакомления с логикой работы:{" "}
            <a
              href="https://t.me/UNIBOT_rent_bot"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#d2a27b] hover:underline"
            >
              @UNIBOT_rent_bot
            </a>
          </p>
        </div>
      </section>

      {/* РЕЗУЛЬТАТ — главный визуал */}
      <section className="py-10 sm:py-16 md:py-20 bg-[#0b0b0b]">
        <div className="mx-auto max-w-5xl px-4 sm:px-10 lg:px-16">
          <div className="mb-4 sm:mb-6 flex items-center gap-3 text-[11px] uppercase tracking-[0.26em] text-[#b7a898]">
            <span className="h-[1px] w-8 sm:w-10 bg-[#b7a898]" />
            <span>Результат</span>
          </div>

          <div className="rounded-lg sm:rounded-xl border border-[#26201a] bg-[#14120f] p-3 sm:p-4 md:p-6 shadow-[0_20px_50px_rgba(0,0,0,0.6)]">
            <img
              src="/projects/bhbot/contract-branded.png"
              alt="Брендированный договор BeHome, сформированный ботом"
              className="w-full rounded-md sm:rounded-lg shadow-lg"
            />
          </div>
          
          <p className="mt-3 sm:mt-4 text-center text-[11px] sm:text-xs text-[#8a7a6f]">
            Итоговый договор, автоматически сформированный ботом на основе диалога
          </p>
        </div>
      </section>

      {/* БИЗНЕС-КОНТЕКСТ */}
      <section className="py-10 sm:py-16 md:py-20 bg-[#11100f] border-y border-[#26201a]">
        <div className="mx-auto max-w-5xl px-4 sm:px-10 lg:px-16">
          <div className="mb-4 sm:mb-6 flex items-center gap-3 text-[11px] uppercase tracking-[0.26em] text-[#b7a898]">
            <span className="h-[1px] w-8 sm:w-10 bg-[#b7a898]" />
            <span>Исходная проблема</span>
          </div>

          <div className="grid gap-6 sm:gap-8 md:grid-cols-2 md:gap-12">
            <div>
              <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-[#f0e5d7] mb-4 sm:mb-6">
                Почему ручное оформление не работает
              </h2>
              
              <div className="space-y-3 sm:space-y-4 text-sm text-[#b3a79a] leading-relaxed">
                <p>
                  Договоры аренды оформлялись вручную — менеджеры заполняли шаблоны, 
                  переносили данные из переписок, правили ошибки после замечаний.
                </p>
                <p>
                  Ошибки в датах, суммах, ФИО и формулировках — стандартная история. 
                  Правки отнимали время, вызывали недовольство клиентов и замедляли сделки.
                </p>
                <p>
                  Юристы тратили ресурсы на однотипные документы вместо сложных задач.
                </p>
              </div>
            </div>

            <div className="rounded-lg sm:rounded-xl border border-[#26201a] bg-[#171311] p-4 sm:p-5 md:p-6">
              <h3 className="text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] text-[#d2a27b] mb-3 sm:mb-4">
                Итог
              </h3>
              <p className="text-sm text-[#c1b7aa] leading-relaxed">
                Процесс был медленным, нестабильным и плохо масштабируемым. 
                Каждый новый договор — это риск ошибки и потерянное время.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ГИПОТЕЗА И РЕШЕНИЕ */}
      <section className="py-10 sm:py-16 md:py-20 bg-[#0b0b0b]">
        <div className="mx-auto max-w-5xl px-4 sm:px-10 lg:px-16">
          <div className="grid gap-8 sm:gap-12 md:grid-cols-2 md:gap-16">
            {/* Гипотеза */}
            <div>
              <div className="mb-4 sm:mb-6 flex items-center gap-3 text-[11px] uppercase tracking-[0.26em] text-[#b7a898]">
                <span className="h-[1px] w-8 sm:w-10 bg-[#b7a898]" />
                <span>Гипотеза</span>
              </div>

              <p className="text-sm text-[#b3a79a] leading-relaxed">
                Если убрать ручной ввод и превратить договор в управляемый сценарий вопросов, то:
              </p>
              
              <ul className="mt-4 space-y-2 text-sm text-[#c1b7aa]">
                <li className="flex items-start gap-2">
                  <span className="text-[#d2a27b] mt-1">→</span>
                  <span>сократится время оформления</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#d2a27b] mt-1">→</span>
                  <span>снизится количество ошибок</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#d2a27b] mt-1">→</span>
                  <span>менеджеры смогут работать без юристов на типовых кейсах</span>
                </li>
              </ul>
            </div>

            {/* Решение */}
            <div>
              <div className="mb-4 sm:mb-6 flex items-center gap-3 text-[11px] uppercase tracking-[0.26em] text-[#b7a898]">
                <span className="h-[1px] w-8 sm:w-10 bg-[#b7a898]" />
                <span>Решение</span>
              </div>

              <p className="text-sm text-[#b3a79a] leading-relaxed mb-4">
                Telegram-бот, который:
              </p>
              
              <ul className="space-y-2 text-sm text-[#c1b7aa]">
                <li className="flex items-start gap-2">
                  <span className="text-[#d2a27b] mt-1">•</span>
                  <span>ведёт пользователя по сценарию вопросов</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#d2a27b] mt-1">•</span>
                  <span>валидирует ввод: ФИО, даты, суммы, адреса</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#d2a27b] mt-1">•</span>
                  <span>автоматически формирует договор по шаблону</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#d2a27b] mt-1">•</span>
                  <span>выдаёт готовый документ</span>
                </li>
              </ul>

              <p className="mt-4 text-xs text-[#8a7a6f]">
                Telegram выбран намеренно — без внедрения в CRM и без обучения персонала.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* КАК РЕШАЕТСЯ ЗАДАЧА */}
      <section className="py-10 sm:py-16 md:py-20 bg-[#11100f] border-y border-[#26201a]">
        <div className="mx-auto max-w-5xl px-4 sm:px-10 lg:px-16">
          <div className="mb-6 sm:mb-8 flex items-center gap-3 text-[11px] uppercase tracking-[0.26em] text-[#b7a898]">
            <span className="h-[1px] w-8 sm:w-10 bg-[#b7a898]" />
            <span>Как это работает</span>
          </div>

          <div className="grid gap-6 sm:gap-8 md:grid-cols-2 md:gap-12 items-start">
            <div>
              <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-[#f0e5d7] mb-4 sm:mb-6">
                Диалог вместо форм и таблиц
              </h2>

              <div className="space-y-3 sm:space-y-4 text-sm text-[#b3a79a] leading-relaxed">
                <p>
                  Пользователь запускает бота. Бот по шагам задаёт вопросы — 
                  как живой менеджер, только быстрее и без ошибок.
                </p>
                <p>
                  На каждом этапе проверяется формат данных. Можно пропустить 
                  необязательные поля. Исключаются ошибки ввода до того, как 
                  они попадут в документ.
                </p>
                <p>
                  После завершения данные автоматически подставляются в договор, 
                  формируется файл и отправляется пользователю.
                </p>
              </div>

              <p className="mt-4 sm:mt-6 text-xs text-[#d2a27b] uppercase tracking-wider">
                Процесс управляется логикой, а не руками
              </p>
            </div>

            <div className="rounded-lg sm:rounded-xl border border-[#26201a] bg-[#171311] p-2 sm:p-3 shadow-[0_18px_45px_rgba(0,0,0,0.55)]">
              <img
                src="/projects/bhbot/dialog-start.png"
                alt="Начало диалога с ботом — сбор данных"
                className="w-full rounded-md sm:rounded-lg"
              />
              <p className="mt-2 sm:mt-3 text-center text-[11px] sm:text-xs text-[#8a7a6f]">
                Сбор данных по сценарию вместо ручного заполнения и переписок
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* КОНТРОЛЬ КАЧЕСТВА */}
      <section className="py-10 sm:py-16 md:py-20 bg-[#0b0b0b]">
        <div className="mx-auto max-w-5xl px-4 sm:px-10 lg:px-16">
          <div className="mb-6 sm:mb-8 flex items-center gap-3 text-[11px] uppercase tracking-[0.26em] text-[#b7a898]">
            <span className="h-[1px] w-8 sm:w-10 bg-[#b7a898]" />
            <span>Контроль качества</span>
          </div>

          <div className="grid gap-6 sm:gap-8 md:grid-cols-2 md:gap-12 items-start">
            <div className="order-2 md:order-1 rounded-lg sm:rounded-xl border border-[#26201a] bg-[#171311] p-2 sm:p-3 shadow-[0_18px_45px_rgba(0,0,0,0.55)]">
              <img
                src="/projects/bhbot/address-validation.png"
                alt="Валидация и структурирование адреса"
                className="w-full rounded-md sm:rounded-lg"
              />
              <p className="mt-2 sm:mt-3 text-center text-[11px] sm:text-xs text-[#8a7a6f]">
                Проверка и структурирование данных на этапе ввода, а не после ошибок
              </p>
            </div>

            <div className="order-1 md:order-2">
              <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-[#f0e5d7] mb-4 sm:mb-6">
                Валидация данных в процессе
              </h2>

              <div className="space-y-3 sm:space-y-4 text-sm text-[#b3a79a] leading-relaxed">
                <p>
                  Каждое поле проверяется сразу при вводе. Адрес распознаётся 
                  и разбивается на компоненты: город, улица, дом, квартира.
                </p>
                <p>
                  Пользователь видит результат и может исправить, если что-то 
                  распозналось неверно. Ошибки ловятся на входе, а не в готовом документе.
                </p>
                <p>
                  Это исключает ситуации, когда договор уже отправлен клиенту, 
                  а в нём перепутан адрес или дата.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ЗАКРЫТИЕ ПРОЦЕССА */}
      <section className="py-10 sm:py-16 md:py-20 bg-[#11100f] border-y border-[#26201a]">
        <div className="mx-auto max-w-5xl px-4 sm:px-10 lg:px-16">
          <div className="mb-6 sm:mb-8 flex items-center gap-3 text-[11px] uppercase tracking-[0.26em] text-[#b7a898]">
            <span className="h-[1px] w-8 sm:w-10 bg-[#b7a898]" />
            <span>Закрытие процесса</span>
          </div>

          <div className="grid gap-6 sm:gap-8 md:grid-cols-2 md:gap-12 items-start">
            <div>
              <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-[#f0e5d7] mb-4 sm:mb-6">
                Готовый документ за минуты
              </h2>

              <div className="space-y-3 sm:space-y-4 text-sm text-[#b3a79a] leading-relaxed">
                <p>
                  После завершения диалога бот формирует договор и отправляет 
                  его в двух форматах: DOCX для редактирования на компьютере 
                  и PDF для просмотра на телефоне.
                </p>
                <p>
                  Менеджер может сразу переслать документ клиенту или 
                  открыть для финальной проверки. Весь процесс — от старта 
                  до готового файла — занимает 2–3 минуты.
                </p>
              </div>
            </div>

            <div className="rounded-lg sm:rounded-xl border border-[#26201a] bg-[#171311] p-2 sm:p-3 shadow-[0_18px_45px_rgba(0,0,0,0.55)]">
              <img
                src="/projects/bhbot/file-delivery.png"
                alt="Отправка готовых файлов DOCX и PDF"
                className="w-full rounded-md sm:rounded-lg"
              />
              <p className="mt-2 sm:mt-3 text-center text-[11px] sm:text-xs text-[#8a7a6f]">
                Готовый договор сразу в двух форматах — для телефона и компьютера
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* РЕАЛЬНОЕ ИСПОЛЬЗОВАНИЕ */}
      <section className="py-10 sm:py-16 md:py-20 bg-[#0b0b0b]">
        <div className="mx-auto max-w-5xl px-4 sm:px-10 lg:px-16">
          <div className="mb-6 sm:mb-8 flex items-center gap-3 text-[11px] uppercase tracking-[0.26em] text-[#b7a898]">
            <span className="h-[1px] w-8 sm:w-10 bg-[#b7a898]" />
            <span>Реальное внедрение</span>
          </div>

          <div className="grid gap-6 sm:gap-8 md:grid-cols-2 md:gap-12 items-start">
            <div className="order-2 md:order-1">
              <div className="rounded-lg sm:rounded-xl border border-[#26201a] bg-[#171311] p-3 sm:p-4 shadow-[0_18px_45px_rgba(0,0,0,0.55)]">
                <img
                  src="/projects/bhbot/metrics.png"
                  alt="Метрики использования BHBot"
                  className="w-full rounded-md sm:rounded-lg"
                />
              </div>
              <p className="mt-2 sm:mt-3 text-center text-[11px] sm:text-xs text-[#8a7a6f]">
                Использование решения в рабочем процессе компании и контроль операций
              </p>
            </div>

            <div className="order-1 md:order-2">
              <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-[#f0e5d7] mb-4 sm:mb-6">
                BHBot — версия для бизнеса
              </h2>

              <div className="space-y-3 sm:space-y-4 text-sm text-[#b3a79a] leading-relaxed">
                <p>
                  На базе UNIBOT была реализована кастомная версия для компании — BHBot. 
                  Решение используется в реальной работе, обрабатывает реальные сделки, 
                  применяется сотрудниками компании.
                </p>
                <p>
                  Решение изначально проектировалось с возможностью контроля: 
                  фиксируются факты генерации и отправки документов, можно считать 
                  количество пользователей и операций, есть отчёты за период.
                </p>
              </div>

              <div className="mt-4 sm:mt-6 rounded-lg border border-[#26201a] bg-[#14120f] p-3 sm:p-4">
                <h4 className="text-xs font-semibold uppercase tracking-wider text-[#d2a27b] mb-2">
                  Это значит, что продукт:
                </h4>
                <ul className="space-y-1 text-sm text-[#c1b7aa]">
                  <li>• измерим</li>
                  <li>• управляем</li>
                  <li>• подходит для масштабирования</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* МАСШТАБИРУЕМОСТЬ */}
      <section className="py-10 sm:py-16 md:py-20 bg-[#11100f] border-y border-[#26201a]">
        <div className="mx-auto max-w-5xl px-4 sm:px-10 lg:px-16">
          <div className="mb-6 sm:mb-8 flex items-center gap-3 text-[11px] uppercase tracking-[0.26em] text-[#b7a898]">
            <span className="h-[1px] w-8 sm:w-10 bg-[#b7a898]" />
            <span>Масштабируемость</span>
          </div>

          <div className="grid gap-6 sm:gap-8 md:grid-cols-2 md:gap-12 items-start">
            <div>
              <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-[#f0e5d7] mb-4 sm:mb-6">
                Универсальная версия
              </h2>

              <div className="space-y-3 sm:space-y-4 text-sm text-[#b3a79a] leading-relaxed">
                <p>
                  UNIBOT — это не только внедрение для конкретной компании. 
                  Решение создано как универсальный продукт, который можно 
                  адаптировать под разные шаблоны и сценарии.
                </p>
                <p>
                  Общая версия доступна для ознакомления и демонстрирует 
                  логику работы без привязки к конкретному бренду или формату договора.
                </p>
              </div>

              <a
                href="https://t.me/UNIBOT_rent_bot"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 sm:mt-6 inline-flex items-center gap-2 text-sm text-[#d2a27b] hover:underline"
              >
                Попробовать демо-версию →
              </a>
            </div>

            <div className="rounded-lg sm:rounded-xl border border-[#26201a] bg-[#171311] p-3 sm:p-4 shadow-[0_18px_45px_rgba(0,0,0,0.55)]">
              <img
                src="/projects/bhbot/contract-universal.png"
                alt="Договор из универсальной версии UNIBOT"
                className="w-full rounded-md sm:rounded-lg"
              />
              <p className="mt-2 sm:mt-3 text-center text-[11px] sm:text-xs text-[#8a7a6f]">
                Универсальная версия решения, не привязанная к конкретной компании
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* РЕЗУЛЬТАТЫ И РОЛЬ */}
      <section className="py-10 sm:py-16 md:py-20 bg-[#0b0b0b]">
        <div className="mx-auto max-w-5xl px-4 sm:px-10 lg:px-16">
          <div className="grid gap-8 sm:gap-12 md:grid-cols-2 md:gap-16">
            {/* Результат */}
            <div>
              <div className="mb-4 sm:mb-6 flex items-center gap-3 text-[11px] uppercase tracking-[0.26em] text-[#b7a898]">
                <span className="h-[1px] w-8 sm:w-10 bg-[#b7a898]" />
                <span>Результат</span>
              </div>

              <ul className="space-y-3 text-sm text-[#c1b7aa]">
                <li className="flex items-start gap-3">
                  <span className="text-[#d2a27b] text-lg">✔</span>
                  <span>Процесс оформления договоров ускорен с 20–30 минут до 2–3 минут</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#d2a27b] text-lg">✔</span>
                  <span>Количество ошибок в данных существенно снижено</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#d2a27b] text-lg">✔</span>
                  <span>Нагрузка на менеджеров и юристов уменьшена</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#d2a27b] text-lg">✔</span>
                  <span>Решение продано и используется в реальной работе</span>
                </li>
              </ul>
            </div>

            {/* Моя роль */}
            <div>
              <div className="mb-4 sm:mb-6 flex items-center gap-3 text-[11px] uppercase tracking-[0.26em] text-[#b7a898]">
                <span className="h-[1px] w-8 sm:w-10 bg-[#b7a898]" />
                <span>Моя роль</span>
              </div>

              <ul className="space-y-3 text-sm text-[#c1b7aa]">
                <li className="flex items-start gap-3">
                  <span className="text-[#9f8f80]">01</span>
                  <span>Анализ бизнес-процесса и выявление узких мест</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#9f8f80]">02</span>
                  <span>Формулировка гипотезы и проектирование решения</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#9f8f80]">03</span>
                  <span>Реализация продукта от идеи до работающего бота</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#9f8f80]">04</span>
                  <span>Внедрение в рабочие процессы компании</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ЗАКРЫВАЮЩИЙ БЛОК */}
      <section className="py-10 sm:py-16 md:py-20 bg-[#11100f] border-t border-[#26201a]">
        <div className="mx-auto max-w-5xl px-4 sm:px-10 lg:px-16 text-center">
          <p className="text-sm sm:text-base md:text-lg text-[#c1b7aa] max-w-2xl mx-auto leading-relaxed">
            Проект UNIBOT — пример того, как из конкретной бизнес-проблемы 
            можно создать рабочий продукт без лишней сложности, который 
            действительно используется и приносит ценность.
          </p>

          <div className="mt-6 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
            <a
              href="https://t.me/UNIBOT_rent_bot"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-6 py-3 rounded-lg bg-[#d2a27b] text-[#0b0b0b] text-sm font-medium hover:bg-[#e0b38c] transition-colors text-center"
            >
              Попробовать демо-бота
            </a>
            <Link
              href="/#contacts"
              className="w-full sm:w-auto px-6 py-3 rounded-lg border border-[#26201a] text-[#d2a27b] text-sm hover:border-[#d2a27b] transition-colors text-center"
            >
              Обсудить похожую задачу
            </Link>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-6 sm:py-8 bg-[#0b0b0b] border-t border-[#26201a]">
        <div className="mx-auto max-w-5xl px-4 sm:px-10 lg:px-16">
          <Link
            href="/#projects"
            className="text-[11px] uppercase tracking-[0.26em] text-[#9f8f80] hover:text-[#d2a27b] transition-colors"
          >
            ← Назад к проектам
          </Link>
        </div>
      </footer>
    </main>
  );
}