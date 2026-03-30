from rembg import remove
from PIL import Image
import io

input_path  = r'C:\Users\HP Victus\OneDrive\Desktop\mening saytim\images\img.png'
output_path = r'C:\Users\HP Victus\OneDrive\Desktop\mening saytim\images\img_nobg.png'

print('Fon olib tashlanmoqda, biroz kuting...')
with open(input_path, 'rb') as f:
    result = remove(f.read())

img = Image.open(io.BytesIO(result)).convert('RGBA')
img.save(output_path, 'PNG')
print('Tayyor! Saqlandi:', output_path)
print('Rasm hajmi:', img.size)

