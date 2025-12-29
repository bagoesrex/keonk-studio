import MaxWidthWrapper from "../layout/max-width-wrapper";
import BrutalCard from "../ui/brutal-card";
import TeamCard from "../ui/team-card";

const teamMembers = [
  {
    name: "Sikucink",
    role: "Founder & Lead Dev",
    avatar: "🐱",
    initials: "KC",
    quote: "Meow is the way",
    color: "bg-primary",
  },
  {
    name: "Sikucink",
    role: "Founder & Lead Dev",
    avatar: "🐱",
    initials: "KC",
    quote: "Meow is the way",
    color: "bg-primary",
  },
  {
    name: "Sikucink",
    role: "Founder & Lead Dev",
    avatar: "🐱",
    initials: "KC",
    quote: "Meow is the way",
    color: "bg-primary",
  },
  {
    name: "Sikucink",
    role: "Founder & Lead Dev",
    avatar: "🐱",
    initials: "KC",
    quote: "Meow is the way",
    color: "bg-primary",
  },
];

export default function TeamSection() {
  return (
    <section id="team" className="border-t-2 border-black">
      <MaxWidthWrapper className="space-y-10 py-15">
        <BrutalCard className="flex flex-row items-center gap-6 bg-white p-5">
          <BrutalCard className="bg-white px-30 py-20">
            <span className="text-4xl font-bold italic">INI IMAGE</span>
          </BrutalCard>
          <div className="space-y-3">
            <BrutalCard className="size-fit px-3 py-1">
              <h2 className="text-xl font-bold text-white uppercase">Developer Team</h2>
            </BrutalCard>
            <p className="text-lg font-bold uppercase">Our Team</p>
            <p className="text-sm text-gray-600">
              The passionate developers behind Keonk Studio's amazing cat-themed worlds.
            </p>
          </div>
        </BrutalCard>
        <div className="grid w-full grid-cols-4 gap-4">
          {teamMembers.map((member) => (
            <TeamCard
              name={member.name}
              role={member.role}
              initials={member.initials}
              quote={member.quote}
            />
          ))}
        </div>
      </MaxWidthWrapper>
    </section>
  );
}
