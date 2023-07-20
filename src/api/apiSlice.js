import axios from 'axios'

export const postLogin = async (email, password) => {
  try {
    const config = {
      headers: {
        'Content-type': 'application/json',
      },
    }

    const { data } = await axios.post(
      'http://localhost:3001/api/v1/user/login',
      { email: email, password: password },
      config,
    )
    if (data.body.token) console.log(data.body.token)
  } catch (error) {
    console.error(error)
  }
}
