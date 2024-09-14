import data from "../data/index.json";

export default function MySkill() {
  return (
    <section className="bg-gray-50 py-16" id="mySkills">
    <div className="max-w-6xl mx-auto px-4 text-center mb-12">
      <p className="text-gray-600 text-sm uppercase mb-2">My Skills</p>
      <h2 className="text-3xl font-bold text-gray-900">My Expertise</h2>
    </div>
    <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {data?.skills?.map((item, index) => (
        <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="relative px-20">
            <img
              src={item.src}
              alt="Skill"
              className=" h-40 w-40"
            />
          </div>
          <div className="p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
            <p className="text-gray-700">{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  </section>
);
}