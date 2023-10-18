export default function Footer() {
    const date = new Date().getFullYear();

    return (
        <>
            <footer>
                <p>&copy; {date} Arunesh India, All Rights reserved.</p>
            </footer>
        </>
    );
}
