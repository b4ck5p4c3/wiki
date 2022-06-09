import type { NextPage } from "next";
import Head from "next/head";
import css from "./Cryptocurrency.module.scss";

const Whishlist: NextPage = () => {
  return (
    <>
      <Head>
        <title>Криптовалюта • B4CKSP4CE</title>
        <meta
          name="description"
          content="Список вещей, которые Бэкспейс хочет получить"
        />
        <meta
          name="keywords"
          content="b4cksp4ce, backspace, бэкспейс, хакспейс, хакспейс спб"
        />
      </Head>
      <h1>Пожертвования в криптовалюте</h1>
      <section className={css.row}>
        <section className={css.column}>
          <header>
            <h2>Bitcoin</h2>
          </header>
          <span className={css.address}>
            bc1q7l2mgs8nutv27q02wewqnalkcdps5u7c2sqy90
          </span>
          <div className={css.qrcode}></div>
        </section>
        <section className={css.column}>
          <header>
            <h2>
              USDT
              <span className={css.label}>TRC20</span>
            </h2>
          </header>
          <span className={css.address}>
            TA4S8uyCC3ndcD2LMj3CVSWhswqbJxWV2e
          </span>
          <div className={css.qrcode}></div>
        </section>
      </section>
    </>
  );
};

export default Whishlist;
