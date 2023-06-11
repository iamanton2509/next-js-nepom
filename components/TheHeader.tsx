import Navigation from "./Navigation";

const NavItems = [
    {label: 'Home', href: '/'},
    {label: 'Blog', href: '/blog'},
    {label: 'About', href: '/about'}
];

const TheHeader = () => {
    return (
        <header className="header">
            <Navigation navLinks={NavItems} />
        </header>
    );
}

export default TheHeader;