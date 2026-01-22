import Link from "next/link";
import Image from "next/image";

export default function TgLeadsParserPage() {
  return (
    <main className="min-h-screen bg-[#0b0b0b] text-[#d1c7ba]">
      {/* HEADER */}
      <section className="border-b border-[#26201a] bg-[#11100f] py-8 sm:py-10">
        <div className="mx-auto max-w-5xl px-4 sm:px-10 lg:px-16">
          <Link
            href="/#projects"
            className="text-[11px] uppercase tracking-[0.26em] text-[#9f8f80] hover:text-[#d2a27b]"
          >
            ← Back to works
          </Link>

          <h1 className="mt-4 sm:mt-6 text-2xl sm:text-3xl md:text-4xl font-semibold text-[#f0e5d7]">
            TG Leads Parser
          </h1>
          <p className="mt-2 sm:mt-3 text-xs sm:text-sm text-[#c1b7aa] max-w-2xl">
            Парсер сообщений из групп по ЖК в Санкт-Петербурге с rule-based
            скорингом для выявления потенциальных покупателей.
          </p>

          {/* Stack badges */}
          <div className="mt-4 sm:mt-5 flex flex-wrap gap-1.5 sm:gap-2">
            {["Python", "Telethon", "asyncio", "SQLite", "TSV export"].map(
              (tech) => (
                <span
                  key={tech}
                  className="rounded border border-[#26201a] bg-[#171311] px-2 py-1 text-[9px] sm:text-[10px] uppercase tracking-wide text-[#9f8f80]"
                >
                  {tech}
                </span>
              )
            )}
          </div>
        </div>
      </section>

      {/* CONTENT */}
      <section className="py-8 sm:py-12">
        <div className="mx-auto max-w-5xl px-4 sm:px-10 lg:px-16 space-y-10 sm:space-y-14 text-sm text-[#d1c7ba] leading-relaxed">
          {/* Problem → Solution */}
          <div>
            <h2 className="text-xs font-semibold uppercase tracking-[0.26em] text-[#b7a898]">
              Проблема → Решение
            </h2>
            <div className="mt-3 space-y-3 text-[#c1b7aa]">
              <p>
                Потенциальные покупатели недвижимости часто задают вопросы в
                чатах жилых комплексов: про ипотеку, планировки, сроки сдачи.
                Эти сообщения — сигналы о намерении купить. Но чатов много, они
                шумные, и вручную отслеживать их нереально.
              </p>
              <p>
                Решение: автоматический сбор сообщений из публичных групп,
                нормализация данных, rule-based скоринг по признакам намерения и
                экспорт кандидатов для дальнейшей работы.
              </p>
            </div>
          </div>

          {/* Функциональность v1 */}
          <div>
            <h2 className="text-xs font-semibold uppercase tracking-[0.26em] text-[#b7a898]">
              Функциональность v1
            </h2>
            <div className="mt-4 grid gap-2 sm:gap-3 sm:grid-cols-2">
              {[
                "Сбор сообщений из Telegram-групп",
                "Backfill по окну времени (21 день)",
                "Дедупликация по ключу chat+message_id",
                "Извлечение контекста (reply/thread)",
                "Нормализация дат в UTC",
                "Rule-based скоринг (signal_score)",
                "Категоризация причин (reason_category)",
                "Фильтрация channel posts / ботов",
                "Экспорт в TSV (raw + scored)",
                "Ссылки на оригинальные сообщения",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-2 text-[#c1b7aa]"
                >
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#d2a27b]" />
                  <span className="text-xs sm:text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Pipeline / Architecture */}
          <div>
            <h2 className="text-xs font-semibold uppercase tracking-[0.26em] text-[#b7a898]">
              Архитектура пайплайна
            </h2>
            <div className="mt-4 flex flex-wrap items-center gap-1.5 sm:gap-2 text-[10px] sm:text-xs text-[#c1b7aa]">
              {[
                "Sources (TG groups)",
                "Parser / Collector",
                "Storage (DB)",
                "Scoring (rules)",
                "Export (TSV)",
                "Validation",
                "→ LLM layer",
              ].map((step, i, arr) => (
                <span key={step} className="flex items-center gap-1.5 sm:gap-2">
                  <span className="rounded border border-[#26201a] bg-[#171311] px-2 sm:px-3 py-1 sm:py-1.5">
                    {step}
                  </span>
                  {i < arr.length - 1 && (
                    <span className="text-[#9f8f80] hidden sm:inline">→</span>
                  )}
                </span>
              ))}
            </div>
          </div>

          {/* IMAGE: CLI Logs */}
          <div>
            <h2 className="text-xs font-semibold uppercase tracking-[0.26em] text-[#b7a898]">
              Parser execution & data pipeline
            </h2>
            <p className="mt-2 text-[11px] sm:text-xs text-[#9f8f80]">
              Консольный запуск парсера: backfill сообщений, дедупликация,
              первичная фильтрация и подсчёт сигналов.
            </p>
            <div className="mt-3 sm:mt-4 overflow-hidden rounded-lg border border-[#26201a] bg-[#171311]">
              <Image
                src="/projects/tg-parser/cli-logs.png"
                alt="CLI logs showing parser execution with hot/warm/discarded counts"
                width={800}
                height={200}
                className="w-full"
              />
            </div>
            <p className="mt-2 text-[10px] sm:text-[11px] text-[#9f8f80]">
              seen=9801 · hot=89 · warm=359 · discarded=8931
            </p>
          </div>

          {/* IMAGE: Scoring Table */}
          <div>
            <h2 className="text-xs font-semibold uppercase tracking-[0.26em] text-[#b7a898]">
              Rule-based lead scoring
            </h2>
            <p className="mt-2 text-[11px] sm:text-xs text-[#9f8f80]">
              Каждое сообщение классифицируется по типу намерения, финансовым
              триггерам и наличию вопроса. Итог — числовой сигнал для отбора.
            </p>
            <div className="mt-3 sm:mt-4 overflow-hidden rounded-lg border border-[#26201a] bg-[#171311] overflow-x-auto">
              <Image
                src="/projects/tg-parser/scoring-table.png"
                alt="Scoring table with status, reason_category, signal_score columns"
                width={1000}
                height={400}
                className="w-full min-w-[600px]"
              />
            </div>
          </div>

          {/* Key Fields */}
          <div>
            <h2 className="text-xs font-semibold uppercase tracking-[0.26em] text-[#b7a898]">
              Ключевые поля данных
            </h2>
            <div className="mt-4 grid gap-3 sm:gap-4 sm:grid-cols-2">
              <div className="rounded-lg border border-[#26201a] bg-[#171311] p-3 sm:p-4">
                <h3 className="text-[10px] sm:text-[11px] font-medium uppercase tracking-wide text-[#d2a27b]">
                  Идентификация
                </h3>
                <p className="mt-2 text-[10px] sm:text-xs text-[#9f8f80] font-mono break-all">
                  tg_chat_id · tg_message_id · message_date_utc · message_link
                </p>
              </div>
              <div className="rounded-lg border border-[#26201a] bg-[#171311] p-3 sm:p-4">
                <h3 className="text-[10px] sm:text-[11px] font-medium uppercase tracking-wide text-[#d2a27b]">
                  Источник
                </h3>
                <p className="mt-2 text-[10px] sm:text-xs text-[#9f8f80] font-mono break-all">
                  chat · jk · source_type · sender_kind · is_channel_post
                </p>
              </div>
              <div className="rounded-lg border border-[#26201a] bg-[#171311] p-3 sm:p-4">
                <h3 className="text-[10px] sm:text-[11px] font-medium uppercase tracking-wide text-[#d2a27b]">
                  Скоринг
                </h3>
                <p className="mt-2 text-[10px] sm:text-xs text-[#9f8f80] font-mono break-all">
                  signal_score · status · reason_category · has_question
                </p>
              </div>
              <div className="rounded-lg border border-[#26201a] bg-[#171311] p-3 sm:p-4">
                <h3 className="text-[10px] sm:text-[11px] font-medium uppercase tracking-wide text-[#d2a27b]">
                  Контент
                </h3>
                <p className="mt-2 text-[10px] sm:text-xs text-[#9f8f80] font-mono break-all">
                  original_text · context_text · reply_to_message_id
                </p>
              </div>
            </div>
          </div>

          {/* IMAGE: Raw Messages */}
          <div>
            <h2 className="text-xs font-semibold uppercase tracking-[0.26em] text-[#b7a898]">
              Примеры сообщений из групп
            </h2>
            <p className="mt-2 text-[11px] sm:text-xs text-[#9f8f80]">
              Типичные сообщения с признаками намерения: вопросы про ипотеку,
              условия покупки, рассмотрение вариантов.
            </p>
            <div className="mt-3 sm:mt-4 overflow-hidden rounded-lg border border-[#26201a] bg-[#171311]">
              <Image
                src="/projects/tg-parser/raw-messages.png"
                alt="Examples of parsed messages from residential complex groups"
                width={600}
                height={150}
                className="w-full"
              />
            </div>
          </div>

          {/* IMAGE: Validation Table */}
          <div>
            <h2 className="text-xs font-semibold uppercase tracking-[0.26em] text-[#b7a898]">
              Manual validation
            </h2>
            <p className="mt-2 text-[11px] sm:text-xs text-[#9f8f80]">
              Сравнение оценки парсера с реальной ценностью лида после
              проверки нейросетью. Позволяет находить ошибки классификации и улучшать
              правила.
            </p>
            <div className="mt-3 sm:mt-4 overflow-hidden rounded-lg border border-[#26201a] bg-[#171311] overflow-x-auto">
              <Image
                src="/projects/tg-parser/validation-table.png"
                alt="Validation table comparing parser score vs real lead quality"
                width={700}
                height={300}
                className="w-full min-w-[500px]"
              />
            </div>
            <p className="mt-2 text-[10px] sm:text-xs text-[#9f8f80]">
              Выводы: часть «hot» — мусор из-за сарказма/контекста → добавлены
              фильтры. «Late-stage» (уже купили) → отдельная категория.
            </p>
          </div>

          {/* IMAGE: Dialog */}
          <div>
            <h2 className="text-xs font-semibold uppercase tracking-[0.26em] text-[#b7a898]">
              Human-in-the-loop interaction
            </h2>
            <p className="mt-2 text-[11px] sm:text-xs text-[#9f8f80]">
              Нейтральное консультативное общение без давления. Парсер
              используется как фильтр, а не как инструмент спама.
            </p>
            <div className="mt-3 sm:mt-4 flex justify-center">
              <div className="overflow-hidden rounded-lg border border-[#26201a] bg-[#171311] max-w-[280px] sm:max-w-sm">
                <Image
                  src="/projects/tg-parser/dialog.png"
                  alt="Example of consultative dialog with a lead"
                  width={400}
                  height={500}
                  className="w-full"
                />
              </div>
            </div>
          </div>

          {/* IMAGE: Outcome */}
          <div>
            <h2 className="text-xs font-semibold uppercase tracking-[0.26em] text-[#b7a898]">
              Outcome example
            </h2>
            <p className="mt-2 text-[11px] sm:text-xs text-[#9f8f80]">
              Один из кейсов, где ранний сигнал и корректный контакт привели к
              сделке. Qualitative proof, не гарантия результата.
            </p>
            <div className="mt-3 sm:mt-4 flex justify-center">
              <div className="overflow-hidden rounded-lg border border-[#26201a] bg-[#171311] max-w-[280px] sm:max-w-sm">
                <Image
                  src="/projects/tg-parser/outcome.png"
                  alt="Outcome: closed deal confirmation"
                  width={400}
                  height={250}
                  className="w-full"
                />
              </div>
            </div>
          </div>

          {/* Limitations */}
          <div>
            <h2 className="text-xs font-semibold uppercase tracking-[0.26em] text-[#b7a898]">
              Ограничения v1
            </h2>
            <div className="mt-4 space-y-2 text-[#c1b7aa]">
              {[
                "Rule-based скоринг ошибается на сарказме, новостях и контексте без reply",
                "Не все чаты публичные — не всегда есть message_link",
                "Не выполняется автоматическое общение (во избежание спама)",
                "Данные обезличиваются для демонстрации",
              ].map((item) => (
                <div key={item} className="flex items-start gap-2">
                  <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-[#9f8f80]" />
                  <span className="text-xs sm:text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Roadmap */}
          <div>
            <h2 className="text-xs font-semibold uppercase tracking-[0.26em] text-[#b7a898]">
              What's next
            </h2>
            <div className="mt-3 text-[#c1b7aa] space-y-2">
              <p className="text-xs sm:text-sm">Подключение LLM-слоя для:</p>
              <div className="ml-3 sm:ml-4 space-y-1">
                {[
                  "Более точной классификации (lead vs owner/agent vs late vs junk)",
                  "Объяснимых причин решения",
                  "Генерации черновика сообщения (опционально)",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-2">
                    <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-[#d2a27b]" />
                    <span className="text-xs sm:text-sm">{item}</span>
                  </div>
                ))}
              </div>
              <p className="mt-3 text-[11px] sm:text-xs text-[#9f8f80]">
                Цель: weekly отчёт для риелтора в один клик.
              </p>
            </div>
          </div>

          {/* Key Engineering Decisions */}
          <div>
            <h2 className="text-xs font-semibold uppercase tracking-[0.26em] text-[#b7a898]">
              Key engineering decisions
            </h2>
            <div className="mt-4 grid gap-3 sm:grid-cols-3">
              {[
                {
                  title: "UTC normalisation",
                  desc: "Все timestamps приводятся к UTC для консистентности между источниками",
                },
                {
                  title: "Dedup keys",
                  desc: "Уникальность по chat_id + message_id исключает дубли при повторных прогонах",
                },
                {
                  title: "Context extraction",
                  desc: "Извлечение reply-цепочек для понимания контекста сообщения",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="rounded-lg border border-[#26201a] bg-[#171311] p-3 sm:p-4"
                >
                  <h3 className="text-[10px] sm:text-[11px] font-medium uppercase tracking-wide text-[#d2a27b]">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-[11px] sm:text-xs text-[#9f8f80]">{item.desc}</p>
                </div>
              ))}
            </div>
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