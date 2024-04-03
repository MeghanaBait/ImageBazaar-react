import CustomImage from './CustomImage';

export const ImageList = ({ list }) => {
// when list is undefined
    // if(!list) return <h1>Fetching ...</h1>

    return (
        <section className="images-list">
            {
                list.map(item => {
                    return <div className="image-wrapper">
                     <CustomImage url={item.urls.regular} key={item.id} />
                    </div>
                })
            }
        </section>
    );
}