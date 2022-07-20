import styles from '@/components/atoms/InfoLink.module.css';
import Link from 'next/link';

type InfoLinkProps = {
  href: string;
};

export default function InfoLink({ href }: InfoLinkProps) {
  return (
    <Link href={href}>
      {/* https://fonts.google.com/icons?selected=Material%20Symbols%20Outlined%3Asearch%3AFILL%400%3Bwght%40400%3BGRAD%400%3Bopsz%4048 */}
      <a className={styles.button}>
        <svg
          className={styles.svg}
          xmlns="http://www.w3.org/2000/svg"
          height="24"
          width="24"
        >
          <path d="M11 17H13V11H11ZM12 9Q12.425 9 12.713 8.712Q13 8.425 13 8Q13 7.575 12.713 7.287Q12.425 7 12 7Q11.575 7 11.288 7.287Q11 7.575 11 8Q11 8.425 11.288 8.712Q11.575 9 12 9ZM12 22Q9.925 22 8.1 21.212Q6.275 20.425 4.925 19.075Q3.575 17.725 2.788 15.9Q2 14.075 2 12Q2 9.925 2.788 8.1Q3.575 6.275 4.925 4.925Q6.275 3.575 8.1 2.787Q9.925 2 12 2Q14.075 2 15.9 2.787Q17.725 3.575 19.075 4.925Q20.425 6.275 21.212 8.1Q22 9.925 22 12Q22 14.075 21.212 15.9Q20.425 17.725 19.075 19.075Q17.725 20.425 15.9 21.212Q14.075 22 12 22ZM12 12Q12 12 12 12Q12 12 12 12Q12 12 12 12Q12 12 12 12Q12 12 12 12Q12 12 12 12Q12 12 12 12Q12 12 12 12ZM12 20Q15.325 20 17.663 17.663Q20 15.325 20 12Q20 8.675 17.663 6.337Q15.325 4 12 4Q8.675 4 6.338 6.337Q4 8.675 4 12Q4 15.325 6.338 17.663Q8.675 20 12 20Z" />
        </svg>
      </a>
    </Link>
  );
}
