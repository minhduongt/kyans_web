import MedicalCondition from '@components/section/section_1/MedicalCondition.jsx';
import MoreSpecial from '@components/section/section_1/MoreSpecial.jsx';

function SectionOne() {
  return (
    <section className="h-[1263px]">
      {/* Group 127*/}
      <div className="h-[920px]">
        {/* Group 118 */}
        <MedicalCondition />
      </div>
      {/* Group 125*/}
      <MoreSpecial />
    </section>
  );
}

export default SectionOne;
