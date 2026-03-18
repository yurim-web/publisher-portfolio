import useScrollAnimation from '../hooks/useScrollAnimation';
import '../styles/info_section.css';

const About = () => {
  useScrollAnimation();
  return (
    <section id="about" className="about_section">
      <div className="about_container">
        <h2 className="about_title">ABOUT ME</h2>
        <div className="about_content">
          <div className="profile_img_container">
            <img
              src={`${process.env.PUBLIC_URL}/myimg.png`}
              alt="프로필사진"
              className="profile_img"
            />
          </div>
          <div className="about_text">
            <h3 className="name">Lee yurim</h3>
            <p className="greeting">
              기획부터 디자인, 퍼블리싱, 프론트엔드 개발까지 직접 경험한{' '}
              <span className="highlight_tech">웹 디자이너 & 퍼블리셔</span> 이유림입니다.
            </p>
            <p className="description">
              광고주 홈페이지를 기획·디자인부터 퍼블리싱·배포까지 100% 책임진 경험이 있으며,
              SaaS 서비스의 랜딩 및 웹 페이지 프론트엔드를 단독으로 구현했습니다.{' '}
              <span className="highlight_tech">디자인 감각과 구현력</span>을 모두 갖추고 있으며,
              Photoshop·Illustrator·Figma를 활용한 디자인 실무와 HTML·CSS·JavaScript 기반의
              퍼블리싱을 강점으로 삼고 있습니다.
            </p>
            <p className="description">
              디자인과 개발을 모두 이해하는 만큼, 디자이너와 개발자 사이의 간격을 자연스럽게 좁히는
              역할을 할 수 있습니다.
            </p>
            <p className="description">
              맡은 화면 하나하나에 책임감을 가지고, 디자인의 완성도와 사용자 경험을 함께 높이는
              디자이너 겸 퍼블리셔가 되겠습니다.
            </p>
          </div>
        </div>

        <div className="about_info">
          <div className="info_column">
            <h4 className="info_title">PERSONAL INFO</h4>
            <ul className="info_list">
              <li>
                <span className="info_icon">🎂</span>
                Birth: 2000.11.04
              </li>
              <li>
                <span className="info_icon">📧</span>
                Email: lyl5152@naver.com
              </li>
              <li>
                <span className="info_icon">📱</span>
                Phone: 010-4054-5152
              </li>
              <li>
                <span className="info_icon">📍</span>
                Location: Incheon, Korea
              </li>
            </ul>

            <h4 className="info_title" style={{ marginTop: '40px' }}>
              WORK EXPERIENCE
            </h4>
            <ul className="info_list">
              <li>2025.04 - NOW | (주)청명종합광고 웹 디자이너 & 퍼블리셔</li>
              <li>2024.01 - 2024.08 | (주)쇼엠 웹 디자이너</li>
              <li>2022.03 - 2023.06 | (주)오라코퍼레이션 콘텐츠 디자이너</li>
            </ul>
          </div>
          <div className="info_column">
            <h4 className="info_title">LICENSE & EDUCATION</h4>
            <ul className="info_list">
              <li>2024.10 - 2024.12 | 웹(퍼블리셔) 프론트엔드 (Js, React) 양성과정 350시간 수료</li>
              <li>2019.03 - 2022.08 | (인천캠)청운대학교 멀티미디어학과 졸업</li>
              <li>2023.09 | 컴퓨터그래픽스운용기능사 자격증 취득</li>
              <li>2023.09 | TOEIC Speaking Test(120)</li>
              <li>2020.09 | GTQ 포토샵 1급 취득</li>
              <li>2012.03 | 디지털정보활용능력(DIAT) 스프레드시트 고급 취득</li>
              <li>2011.07 | 디지털정보활용능력(DIAT) 워드프로세서 초급 취득</li>
              <li>2010.03 | 정보기술자격(ITQ) 한글파워포인트 취득</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="infinite_scroll_container" aria-hidden="true">
        <div className="infinite_scroll_text">
          <span>YURIM'S PORTFOLIO</span>
          <span>YURIM'S PORTFOLIO</span>
          <span>YURIM'S PORTFOLIO</span>
          <span>YURIM'S PORTFOLIO</span>
          <span>YURIM'S PORTFOLIO</span>
          <span>YURIM'S PORTFOLIO</span>
          <span>YURIM'S PORTFOLIO</span>
          <span>YURIM'S PORTFOLIO</span>
        </div>
      </div>
    </section>
  );
};

export default About;
