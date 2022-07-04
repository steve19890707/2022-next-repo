import { useRouter } from "next/router";

const menu = [
  {
    name: "Home",
    link: "/home"
  }, {
    name: "About",
    link: "/about"
  }, {
    name: "Hyper",
    link: "/hyper"
  }
]
export default function Header() {
  const { ...route } = useRouter();
  return <header className="header">{menu.map((value, key) => <div className="header-links" onClick={() => route.push(value.link)} key={key}>{value.name}</div>)}</header>
}