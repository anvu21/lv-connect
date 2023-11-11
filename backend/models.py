from dataclasses import dataclass
from typing import Optional
import datetime

@dataclass
class Event():
    id: str
    name: str
    description: str
    location: str
    pictures: str
    date: datetime.datetime
    type: str # "EVENT" or "VOLUNTEER"
    comments: int # Increments each time new comment is posted
    
@dataclass
class Comment():
    id: str
    user_id: str
    event_id: str
    content: str
    date: datetime.datetime
    
@dataclass
class User():
    id: str
    business_id: Optional[str] = None
    name: str
    username: str
    email: str
    bio: str
    dateSignUp: datetime.datetime

@dataclass
class business():
    id: str
    name: str
    industry: str
    address: str
    phone: str
    email: str
    bio: str

@dataclass
class Chat():
    id: str
    name: str
    description: str
    messageCount: int # So if someone wants to sort by popularity
    date: datetime.datetime

@dataclass
class Message():
    id: str
    user_id: str
    chat_id: str
    contents: str
    date: datetime.datetime
    

    