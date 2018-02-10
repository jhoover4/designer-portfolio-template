import unittest
from app import app

class TestApp(unittest.TestCase):

    def setUp(self):
        self.app = app.test_client()

    def test_index(self):
        url = self.app.get('/')
        self.assertTrue(url.data)
        self.assertEqual(url.status_code, 200)

    def test_portfolio(self):
        url = self.app.get('/work')
        self.assertTrue(url.data)
        self.assertEqual(url.status_code, 200)

if __name__ == '__main__':
    unittest.main()
