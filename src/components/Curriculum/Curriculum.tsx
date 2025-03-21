import * as S from "./styled";

const Curriculum = () => {
  return (
    <div style={{ marginBottom: "2rem" }}>
      <h1 style={{ color: "#f0f8ff", marginTop: "5rem" }}>Curriculum</h1>
      <div style={{ padding: '2rem'}}>
        <a
          href="https://acrobat.adobe.com/id/urn:aaid:sc:US:6868b85d-d2e8-4092-81f6-4d5531c2ce12"
          target="_blank"
          rel="noopener noreferrer"
        >
          <S.CurriculumImg src="../../assets/curriculumIcon.png" alt="" />
        </a>
      </div>
    </div>
  );
};

export default Curriculum;
