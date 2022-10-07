import type { NextPage } from 'next';
import { useRouter } from 'next/dist/client/router';

const Link: NextPage = () => {
    const router = useRouter();
    const domain = process.env.BASE_URL;
    const turlId = router.query.link;
    const turl = domain + '/' + turlId;

    const copy = () => {
        if (navigator.clipboard) {
            if (document.getElementById('tlink') !== null) {
                const tlink = document.getElementById('tlink');
                const link = tlink?.innerHTML.toString();
                if (link) navigator.clipboard.writeText(link);
            }
        } else {
            console.log('clipboard not supported');
        }
    };

    return (
        <div className="tiny">
            <div className="w-full flex md:flex-row flex-col items-center justify-evenly content-between">
                <h3 className="text-3xl mr-2 bg-red-400 rounded-md px-2 py-1">
                    Tiny URL:{' '}
                </h3>
                <h3
                    id="tlink"
                    className="text-3xl bg-green-500 rounded-md px-2 py-1 my-3">
                    {`${turl}`}
                </h3>

                <button
                    className="text-2xl bg-yellow-500 rounded-md ml-2 px-3 py-1"
                    onClick={copy}>
                    Copy to Clipboard
                </button>
            </div>
        </div>
    );
};

export default Link;
