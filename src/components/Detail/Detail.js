import './Detail.css'
import a from './a.jpg'
const Detail = () => {
    return (
        <>

            <div class="container">
                <div class="product-image">
                    <img src={a} alt="" class="product-pic" />
                </div>

                <div class="product-details">
                    <header>
                        <h1 class="title">Nike Roshe Run</h1>
                        <div class="year">
                            <h3>year: 2000</h3>
                        </div>
                    </header>
                    <article>
                        <h5>Description</h5>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    </article>

                    <div class="footer">
                        <form>
                            <div className='review'>
                                <input name="comment" type="text" class="feedback-input" placeholder="enter your comment here" />
                                <input type="number" max={10} min={0} />
                            </div>
                            <input type="submit" value="SUBMIT" />
                        </form>

                    </div>
                </div>

            </div>

        </>
    );
}

export default Detail;