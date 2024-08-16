import fs from 'fs/promises';
function page() {
    let a = fs.readFile('.gitignore');
    a.then((a) => console.log(a.toString()));
    return (
        <div>
            Contact Page
        </div>
    )
}

export default page
