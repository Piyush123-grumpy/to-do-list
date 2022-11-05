from .serializers import NoteSerializers
from .models import Note
from api import serializers
from rest_framework.response import Response

def notes():
    notes=Note.objects.all().order_by('-updated')
    serializer=NoteSerializers(notes,many=True)
    return Response(serializer.data)

def createNote(request):
    data=request.data
    note=Note.objects.create(
        body=data['body']
        )
    serializer=NoteSerializers(note,many=False)
    return Response(serializer.data)   