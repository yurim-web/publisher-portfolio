import '../styles/main_section.css';

const Main = () => {
  return (
    <main className="main">
      <section id="main" className="main_section">
        <div className="blur blur_1" />
        <div className="blur blur_2" />
        <div className="blur blur_3" />
        <div className="blur blur_4" />
        <div className="main_container">
          <h1 className="main_title">
            YURIM'S
            <br />
            PORTFOLIO
          </h1>
          <p className="main_description">
            안녕하세요. 디자인과 개발을 함께하는 이유림입니다.
            <br />
            사용자 경험을 중시하며, 디자인·퍼블리싱·프론트엔드까지 폭넓게 다룹니다!
          </p>
        </div>
      </section>
    </main>
  );
};

export default Main;
