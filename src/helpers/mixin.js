import Swal from 'sweetalert2'
const mixins = {
  data () {
    return {
      webURL: process.env.VUE_APP_WEBURL,
      formRegister: {
        name: '',
        email: '',
        password: ''
      },
      formLogin: {
        email: '',
        password: ''
      },
      formForgot: {
        email: ''
      },
      formUser: {
        name: '',
        email: '',
        image: '',
        account: '',
        biodata: '',
        latitude: '',
        longitude: ''
      },
      Toast: Swal.mixin({
        toast: true,
        position: 'top',
        showConfirmButton: false,
        timer: 2000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener('mouseenter', Swal.stopTimer)
          toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
      })
    }
  },
  methods: {
    alertModif (ico, title) {
      this.Toast.fire({
        icon: ico,
        title: title
      })
    },
    alertPopUp (ico, title, info) {
      Swal.fire({
        icon: ico,
        title: title,
        text: info
      })
    },
    swalLoading (title) {
      Swal.fire({
        title: title,
        allowOutsideClick: false,
        showConfirmButton: false,
        willOpen: () => {
          Swal.showLoading()
        }
      })
    },
    swalLoadingClose () {
      Swal.close()
    }
  }
}
export default mixins
