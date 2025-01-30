import requests
import json

def get_books(file):
   

    books = file.readlines()

    list_books = []
    title_temp = []
    author_temp = []
    book_temp = ()

    flag = False
    flag2 = False

    for book in books:
        for letter in book:
            if flag:
                if letter == '-':
                    flag2 = True
                elif flag2:
                    if letter != "\n":
                        title_temp.append(letter)
                elif flag2 == False:
                    if letter != ',':
                        author_temp.append(letter) 
            if letter == ' ':
                flag = True
        book_temp = ("".join(author_temp),"".join(title_temp))
        list_books.append(book_temp)
        title_temp = []
        author_temp = []
        book_temp = ()
        flag = False
        flag2 = False
    return list_books

def book_info(info):
    url = f'https://www.googleapis.com/books/v1/volumes?q={info[1]}+inauthor:{info[0]}&key=AIzaSyAZRBVn5RrH3bQdfJN5a8rcqa2Pt-nahV8'
    print(url)
    try:
        response = requests.get(url)

        if response.status_code == 200:
            posts = response.json()
            return posts
        else:
            print('Error:', response.status_code)
            return None
    except requests.exceptions.RequestException as e:
        print('Error:', e)
        return None

def send_data(info,author,title):
    try:
        description = info["items"][0]["volumeInfo"]["description"]
        imgLink = info["items"][0]["volumeInfo"]["imageLinks"]["thumbnail"]
        body = {'title':title,'author':author,'description':description,'cover':imgLink}
        url = "http://localhost:8080/book/create"
        try:
            response = requests.post(url,json=body)
            if response.status_code == 200:
                posts = response.json()
                return posts
            else:
                print('Error:',response.status_code)
                return None
        except requests.exceptions.RequestException as e:
            print('Error:',e)
            return None
    except:
        print(author, title)
        return None


def main():
    file = open("books_test.txt","r")
    books = get_books(file)
    for book in books:
        info = book_info(book)
        send_data(info,book[0],book[1])

if __name__ == '__main__':
    main()

