import Portfolio from '@/components/portfolio/portfolio';
import { profile } from '@/lib/portfolio';
import { getSiteUrl } from '@/lib/site-url';
export default function Home() {
  const jsonLd = {'@context':'https://schema.org','@type':'Person',name:profile.name,jobTitle:'Flutter Developer',url:getSiteUrl(),sameAs:[profile.github,profile.linkedin],alumniOf:{'@type':'CollegeOrUniversity',name:'Military Institute of Science and Technology'}};
  return <><script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(jsonLd).replace(/</g,'\\u003c')}} /><Portfolio /></>;
}
