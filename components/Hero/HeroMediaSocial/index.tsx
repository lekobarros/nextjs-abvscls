import { css } from 'styled-components';
import style from './styled';

import Link from 'next/link'
import SvgIcon from 'components/SvgComponent'

import social from 'src/json/social'

const socialKeys: string[] = Object.keys(social);

export const HeroMediaSocial = () => (
  <div css={style.heroMediaSocial}>
    <span>Follow Me</span>
    <div css={style.heroMediaSocialOutline} />

    {/* Social Media Links */}
    <ul className="flex items-center gap-4">
      {socialKeys.map((item: string, index: number) => {
        const elIndex = item as keyof typeof social;

        return (
          <li key={`social-key-${social[elIndex].name}`}>
            <Link href={social[elIndex].url} target="_blank">
              <SvgIcon path={social[elIndex].path} />
            </Link>
          </li>
        )
      })}
    </ul>
  </div>
);

export default HeroMediaSocial;