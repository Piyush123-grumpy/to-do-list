from tkinter import N
from urllib import response
from rest_framework.response import Response
from rest_framework.decorators import api_view
from .serializers import NoteSerializers
from .models import Note
from api import serializers
from .utils import *
# Create your views here.

@api_view(['GET'])
def getRoutes(request):

    routes = [
        {
            'Endpoint': '/notes/',
            'method': 'GET',
            'body': None,
            'description': 'Returns an array of notes'
        },
        {
            'Endpoint': '/notes/id',
            'method': 'GET',
            'body': None,
            'description': 'Returns a single note object'
        },
        {
            'Endpoint': '/notes/create/',
            'method': 'POST',
            'body': {'body': ""},
            'description': 'Creates new note with data sent in post request'
        },
        {
            'Endpoint': '/notes/id/update/',
            'method': 'PUT',
            'body': {'body': ""},
            'description': 'Creates an existing note with data sent in post request'
        },
        {
            'Endpoint': '/notes/id/delete/',
            'method': 'DELETE',
            'body': None,
            'description': 'Deletes and exiting note'
        },
    ]
    return Response(routes)

@api_view(['GET','POST'])
def getNotes(request):
    if request.method == "GET":
        return notes()
    if request.method =="POST":
        return createNote(request)


@api_view(['GET','PUT','DELETE'])
def getNote(request,pk):
    if request.method == "GET":
        notes=Note.objects.get(id=pk)
        serializer=NoteSerializers(notes,many=False)
        return Response(serializer.data)
    if request.method =="PUT":
        data=request.data
        note=Note.objects.get(id=pk)
        serializer=NoteSerializers(instance=note,data=data)
    
        if serializer.is_valid():
            serializer.save()
        return Response(serializer.data)

    if request.method== "DELETE":
        note=Note.objects.get(id=pk)
        note.delete()
        return Response('Note is dleted')


# @api_view(['POST'])
# def createNote(request):
#     data=request.data
#     note=Note.objects.create(
#         body=data['body']
#     )
#     serializer=NoteSerializers(note,many=False)
#     return Response(serializer.data)


# @api_view(['PUT'])
# def updateNote(request,pk):
#     data=request.data
#     note=Note.objects.get(id=pk)
#     serializer=NoteSerializers(instance=note,data=data)
    
#     if serializer.is_valid():
#         serializer.save()
#     return Response(serializer.data)

# @api_view(['DELETE'])
# def deleteNote(request,pk):
#     note=Note.objects.get(id=pk)
#     note.delete()
#     return Response('Note is dleted')