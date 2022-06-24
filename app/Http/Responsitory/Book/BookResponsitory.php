<!-- <?php 
    namespace App\Responsitory;
    use App\Models\Book;
    use App\Responsitory\BaseResponsitory;

    class BookResponsitory extends BaseResponsitory {

        protected $book;

        public function __construct (){
            $this->book = Book::query();
        }

        public function getAll(){
            $data = $this->book->get();
            return $data;
        }

       function getbyId(){

       }

        function delete (){

        }

        function create(){

        }

        function update(){

        }
    }
?> -->