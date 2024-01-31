import './Header.css'
const Header = ()=>{
    return(
        <div className='header'>
            <img src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSreo--48C292o66oBIVejpl-JtI9-VYn93sXQbe1s5cdMi4tF0" className='header_logo' alt='image_logo' />
            <div className='header_search'>
                <input type='text' placeholder='Search' className='header_input_search' />
                <i class="fa-solid fa-magnifying-glass"  ></i>
            </div>
            <div className='header_option'>.
                <div className='option'>
                    <span className='header_optionLineone'>Hello, Guest</span>
                    <span className='header_optionLinetwo'>Sign in</span>
                </div>
                <div className='option'>
                <span className='header_optionLineone'>Return</span>
                    <span className='header_optionLinetwo'>& Orders</span>
                </div>
                <div className='option'>
                <span className='header_optionLineone'>Your</span>
                    <span className='header_optionLinetwo'>Prime</span>
                </div>
            </div>
            <div className='header_cart'>
                <div className='cart-icon'>
                <i class="fa-solid fa-basket-shopping"></i>
                    <span className='header_optionLinetwo cart-count'>0</span>
                 </div>   
            </div> 
        </div>
    )
}
export default Header;