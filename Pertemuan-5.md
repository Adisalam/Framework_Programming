npm install @nestjs/typeorm typeorm pg
docker compose -d
select * from nama_table
insert into
update 
delete
.find()
.save()
.update()
.delete()

id: String;
@Column({typer:'varchar', length:64})

createdAtDateColumn

DeleteColumn({name: 'deleted_at', nullable:true})
deleatedAt: Date;

imports: [typescript.forFeature([book])],
constructor(
    @InjectRepository(book)
    private  readonly bookRepository: Repository<book>
){}

async findAll(): Promise<book[]>{
    return this.bookRepository.find({
        order:{createdAt:'DESC'}
    })
}

async findOne(id: String): Promise<book> {
    const book = await this.bookRepository.findOneBy{(id)};

    if(!book){
        throw new NotFoundException('buku tidak ditemukan')
    }

    return book
}

async create(book: CreateBookDto): Promise<book> {
    const newBook = this.bookRepository.create(book)

    return await this.bookRepository.save(newBook);
}

async update(id: String, book: createBookDto): Promise<book> {
    const indexBook = await this.findOne(id)

    const UpdateBook = this.bookRepository.merge(indexBook, book)

    return await this.repository.save(updateBook)
}

asyn delete(id: String): Promise<{Message: String, deletedId: String}> {
    await this.findOne(id)

    await this.bookRepository.softDelete(id)

    return{
        message: 'data berhasil dihapus',
        deletedId: id
    }
}

