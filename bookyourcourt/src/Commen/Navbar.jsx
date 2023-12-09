
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBBtn,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,MDBDropdownItem,MDBCollapse,} from 'mdb-react-ui-kit';
  import "../Commen/css/Navbar.css"
import { useSelector } from 'react-redux';

function NavbarCommen() {
  const { userDetails } = useSelector(state => state.user);


  return (
    <MDBNavbar expand='lg' light bgColor='light' >
      <MDBContainer fluid>
        <MDBNavbarBrand className="btn btn-outline-primary" href='#'>BC</MDBNavbarBrand>

        <MDBNavbarToggler
          aria-controls='navbarSupportedContent'
          aria-expanded='false'
          aria-label='Toggle navigation'
         
        >
          <MDBIcon icon='bars' fas />
        </MDBNavbarToggler>

        <MDBCollapse navbar >
          <MDBNavbarNav className='mr-auto mb-2 mb-lg-0'>
            <MDBNavbarItem>
              <MDBNavbarLink className='nav' active aria-current='page' href='/home'>
                Home
              </MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
              <MDBNavbarLink className='nav' active aria-current='page' href='/addNewcourt'>
                Add Court
              </MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink className='nav' href='#'>Link</MDBNavbarLink>
            </MDBNavbarItem>

            <MDBNavbarItem>
              <MDBDropdown>
                <MDBDropdownToggle className='nav nav-link' tag='a' role='button'>
                  Dropdown
                </MDBDropdownToggle>
                <MDBDropdownMenu>
                  <MDBDropdownItem link className='nav'>Action</MDBDropdownItem>
                  <MDBDropdownItem link className='nav'>Another action</MDBDropdownItem>
                  <MDBDropdownItem link className='nav'>Something else here</MDBDropdownItem>
                </MDBDropdownMenu>
              </MDBDropdown>
            </MDBNavbarItem>

            <MDBNavbarItem>
              <MDBNavbarLink disabled href='#' tabIndex={-1} aria-disabled='true'>
                Disabled
              </MDBNavbarLink>
            </MDBNavbarItem>
          </MDBNavbarNav>

          <form className='d-flex input-group w-auto'>
            <input type='search' className='form-control' placeholder='Type query' aria-label='Search' />
            <MDBBtn color='primary'>Search</MDBBtn>
            
          </form>
          
          <div className='profile rounded'>{userDetails.fname}{userDetails.lname}</div>
        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>
  );
}

export default NavbarCommen;
