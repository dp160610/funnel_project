export const CLIENT_LOGOS = [
  '1','2','3','4','5','6','7','8','9','10','11','12','18','20','21','22','26','28','31','34','41','43','50','58'
].map(n => `https://realatte.com/images/clientslogo/Mumbai/${n}.png`);

export default function LogoWall() {
  const rowA = CLIENT_LOGOS.slice(0, 12);
  const rowB = CLIENT_LOGOS.slice(12);
  return (
    <section className="border-y border-line bg-ink overflow-hidden">
      <div className="py-6 border-b border-line marquee">
        <div className="marquee-track gap-16 animate-marquee-mid">
          {[...rowA, ...rowA].map((src, i) => (
            <img key={i} src={src} alt="client logo" className="h-10 md:h-12 w-auto opacity-60 hover:opacity-100 transition-opacity grayscale hover:grayscale-0" loading="lazy" />
          ))}
        </div>
      </div>
      <div className="py-6 marquee">
        <div className="marquee-track gap-16 animate-marquee-rev">
          {[...rowB, ...rowB].map((src, i) => (
            <img key={i} src={src} alt="client logo" className="h-10 md:h-12 w-auto opacity-60 hover:opacity-100 transition-opacity grayscale hover:grayscale-0" loading="lazy" />
          ))}
        </div>
      </div>
    </section>
  );
}
