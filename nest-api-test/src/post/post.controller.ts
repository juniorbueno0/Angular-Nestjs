import { Controller, Get, Post, Delete, Body, Param, ParseIntPipe} from '@nestjs/common';
import { PostService } from './post.service';
import { Message } from 'src/schemas/message.schema';

@Controller('posts')
export class PostController {

    constructor(private readonly postService:PostService){  }

    @Get('')
    public findAll(): Array<Message> {
        return this.postService.findAll();
    }

    @Get(':id')
    public findOne(@Param('id', ParseIntPipe) id: number): Message {
        return this.postService.findOne(id);
    }
    
    @Post()
    public create(@Body() post: Message): Message {
        return this.postService.create(post);
    }

    @Delete(':id')
    public delete(@Param('id', ParseIntPipe) id: number): void {  
        this.postService.delete(id);
    }

}   
