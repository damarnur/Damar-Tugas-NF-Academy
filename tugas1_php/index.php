<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Tugas 1 PHP</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: Arial, sans-serif;
        }
        
        body {
            background-color: #f5f5f5;
            padding: 20px;
            line-height: 1.6;
        }
        
        .container {
            max-width: 600px;
            margin: 0 auto;
            background-color: #fff;
            padding: 30px;
            border-radius: 8px;
            box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
        }
        
        .header {
            text-align: center;
            margin-bottom: 30px;
        }
        
        .header h1 {
            color: #2c3e50;
            font-size: 24px;
        }
        
        .form-group {
            margin-bottom: 20px;
        }
        
        label {
            display: block;
            margin-bottom: 8px;
            font-weight: bold;
            color: #333;
        }
        
        input[type="text"],
        input[type="email"],
        input[type="number"] {
            width: 100%;
            padding: 12px;
            border: 1px solid #ddd;
            border-radius: 4px;
            font-size: 16px;
            transition: border-color 0.3s;
        }
        
        input[type="text"]:focus,
        input[type="email"]:focus,
        input[type="number"]:focus {
            border-color: #3498db;
            outline: none;
            box-shadow: 0 0 5px rgba(52, 152, 219, 0.3);
        }
        
        .btn {
            background-color: #3498db;
            color: white;
            border: none;
            padding: 12px 20px;
            font-size: 16px;
            border-radius: 4px;
            cursor: pointer;
            text-transform: uppercase;
            font-weight: bold;
            transition: background-color 0.3s;
        }
        
        .btn:hover {
            background-color: #2980b9;
        }
        
        .result {
            margin-top: 30px;
            padding: 20px;
            background-color: #f9f9f9;
            border-left: 4px solid #3498db;
            border-radius: 4px;
        }
        
        .result p {
            margin-bottom: 8px;
        }
        
        .status {
            margin-top: 15px;
            font-weight: bold;
        }
        
        .lulus {
            color: #27ae60;
        }
        
        .remedial {
            color: #e74c3c;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>Form Nilai Mahasiswa</h1>
        </div>
        
        <form method="post">
            <div class="form-group">
                <label>Nama</label>
                <input name="name" type="text" placeholder="Masukkan nama lengkap">
            </div>
            
            <div class="form-group">
                <label>Email</label>
                <input type="email" name="email" placeholder="Masukkan email">
            </div>
            
            <div class="form-group">
                <label>Nilai</label>
                <input name="grade" type="number" placeholder="Masukkan nilai">
            </div>
            
            <button type="submit" name="button" value="count" class="btn">Hitung</button>
        </form>
        
        <?php
        if (isset($_POST['button'])){
            $name = $_POST['name'];
            $email = $_POST['email'];
            $grade = $_POST['grade'];
            
            echo '<div class="result">';
            echo "<p><strong>Nama:</strong> $name</p>";
            echo "<p><strong>Email:</strong> $email</p>";
            echo "<p><strong>Nilai:</strong> $grade</p>";
            
            if ($grade > 70){
                echo '<p class="status lulus">Status: Anda Lulus</p>';
            } else {
                echo '<p class="status remedial">Status: Anda Remedial</p>';
            }
            echo '</div>';
        }
        ?>
    </div>
</body>
</html>