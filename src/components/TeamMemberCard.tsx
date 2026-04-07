import Image from "next/image";

interface TeamMemberCardProps {
  name: string;
  role: string;
  subtitle?: string;
  image: string;
  bio: string[];
  reverse?: boolean;
}

export function TeamMemberCard({ name, role, subtitle, image, bio, reverse }: TeamMemberCardProps) {
  // Use a 2-row × 3-col grid:
  //   Row 1: name/role (col 1) | empty (cols 2-3)
  //   Row 2: photo    (col 1) | bio   (cols 2-3)
  // "reverse" flips photo to col 3, bio to cols 1-2
  const photoCol = reverse ? "lg:col-start-3 lg:row-start-2" : "lg:col-start-1 lg:row-start-2";
  const nameCol  = reverse ? "lg:col-start-3 lg:row-start-1" : "lg:col-start-1 lg:row-start-1";
  const bioCol   = reverse
    ? "lg:col-start-1 lg:col-span-2 lg:row-start-2"
    : "lg:col-start-2 lg:col-span-2 lg:row-start-2";

  return (
    <div className="grid gap-x-16 gap-y-4 lg:grid-cols-3 lg:grid-rows-[auto_1fr]">
      {/* Name / role — row 1 */}
      <div className={`${nameCol} pl-1 border-l-2 border-pc-gold`}>
        <h2 className="text-xl font-bold text-pc-neutral-900 pl-3">{name}</h2>
        <p className="text-pc-gold font-semibold text-sm pl-3 mt-0.5">{role}</p>
        {subtitle && <p className="text-pc-neutral-500 text-xs pl-3 mt-0.5">{subtitle}</p>}
      </div>

      {/* Photo — row 2, same column as name */}
      <div className={`${photoCol} relative aspect-[3/4] w-full overflow-hidden rounded-2xl bg-pc-neutral-100`}>
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover object-top"
          sizes="(max-width: 1024px) 100vw, 33vw"
        />
      </div>

      {/* Bio — row 2, opposite columns — pt-3 nudges text below rounded photo edge */}
      <div className={`${bioCol} pt-3 space-y-4 text-pc-neutral-600 leading-relaxed`}>
        {bio.map((paragraph, idx) => (
          <p key={idx} className="text-left lg:text-justify">{paragraph}</p>
        ))}
      </div>
    </div>
  );
}
