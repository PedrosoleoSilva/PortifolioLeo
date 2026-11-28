import Link from "next/link";
import "./Button.css";

interface Props {
  title: string;
  href: string;
  variant?: "primary" | "secondary";
}

export default function Button({ title, href, variant = "primary" }: Props) {
  return (
    <Link href={href} className={`button ${variant}`}>
      {title}
    </Link>
  );
}
