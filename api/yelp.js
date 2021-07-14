import axios from 'axios'

export default axios.create({
  baseURL: 'https://api.yelp.com/v3/businesses',
  headers: {
    Authorization: 'Bearer toRxGY3tSKeUQshkz9HHiocjsxw6HZKd2vKfpBvMZifB5gAKHaE5Ui2vdc4rtqfVEactg9qXRfz2fV2tUAGdw0kch2mMEEJPlY-qMfxXSrOSqf5hsc-mNTH8nBbvYHYx'
  }
})
