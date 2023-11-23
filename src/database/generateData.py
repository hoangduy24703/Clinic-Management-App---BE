import random
from faker import Faker
import pandas as pd
from datetime import datetime, timedelta

fake = Faker()

# Số lượng records
num_benhnhan = 100000
num_hosobenhnhan = 100000
num_nhanvien = 1000
num_phongkham = 20
num_danhmucdieutri = 10
num_loaidieutri = 50
num_kehoachdieutri = 30000
num_buoidieutri = 110000
num_chitietdieutri = 110000
num_chitietrangdieutri = 110000
num_donthuoc = 50000
num_thuoc = 100
num_chitietdonthuoc = 50000
num_hoadon = 20000
num_lichhen = 30000
num_lichlamviec = 50000
num_calam = 4

# Ngày hiện tại
current_date = datetime.now()

# Hàm tạo danh sách các records với các thuộc tính được điều chỉnh
def generate_data():
    start_index = 1

    # Nhân viên
    nhanvien_data = []
    for i in range(start_index, start_index + num_nhanvien):
        typeNV = random.choice(['NS', 'NV', 'QT'])
        lastDigit = random.randrange(100, 1000)
        firstDigit = random.randrange(10, 100)
        pk = random.randrange(0,21)
        nhanvien = {
            'IDNHANVIEN': f'{typeNV}{i:06d}',
            'TENNV': fake.name(),
            'NAMSINH': fake.date_of_birth(),
            'GIOITINH': random.choice(['Nam', 'Nữ']),
            'SODIENTHOAI': f'0{firstDigit}{i:07d}{lastDigit}',
            'MATKHAU': fake.password(length=10),
            'LOAINV': typeNV,
            'IDPHONGKHAM': f'P{pk}',
        }
        nhanvien_data.append(nhanvien)

    # Bệnh nhân
    benhnhan_data = []
    for i in range(start_index, start_index + num_benhnhan):
        lastDigit = random.randrange(100, 1000)
        ngaysinhbn = fake.date_of_birth()
        id_nhanvien_ns = random.choice([n['IDNHANVIEN'] for n in nhanvien_data if n['LOAINV'] == 'NS'])
        benhnhan = {
            'IDBENHNHAN': f'BN{i:06d}',
            'TENBN': fake.name(),
            'NAMSINH': ngaysinhbn,
            'GIOITINH': random.choice(['Nam', 'Nữ']),
            'SODIENTHOAI': f'0{i:06d}{lastDigit}',
            'TUOI': datetime.now().year - ngaysinhbn.year,
            'DIACHI': fake.address(),
            'MATKHAU': fake.password(length=10),
            'BACSIMD': id_nhanvien_ns,
        }
        benhnhan_data.append(benhnhan)

    # Phòng khám
    phongkham_data = []
    for i in range(start_index, start_index + num_phongkham):
        lastDigit = random.randrange(100, 1000)
        firstDigit = random.randrange(1000, 10000)
        phongkham = {
            'IDPHONGKHAM': f'P{i:02d}',
            'TENPK': fake.name(),
            'DIACHIPK': fake.address(),
            'LIENHE': f'0{firstDigit}{i:02d}{lastDigit}',
        }
        phongkham_data.append(phongkham)

    # Danh Mục Điều Trị
    danhmucdieutri_data = []
    ma_danh_muc_dieu_tri = ['TM', 'ĐT', 'CC']
    ten_danh_muc_dieu_tri = ['Thẩm mỹ', 'Điều trị', 'Cấp cứu']

    for i in range(len(ma_danh_muc_dieu_tri)):
        
        danhmucdieutri = {
            'MADANHMUC': ma_danh_muc_dieu_tri[i],
            'TENDM': ten_danh_muc_dieu_tri[i],
        }
        danhmucdieutri_data.append(danhmucdieutri)


    # Loại Điều Trị
    loaidieutri_data = []
    ma_loai_dieu_tri = ['TK', 'TR', 'CT', 'NR', 'CVR', 'NRCN', 'TRS']
    ten_loai_dieu_tri = ['Thăm khám', 'Trám răng', 'Chữa tủy', 'Nhổ răng', 'Cạo vôi răng', 'Niềng - chỉnh nha', 'Trồng răng sứ']

    for i in range(len(ma_loai_dieu_tri)):
        loaidieutri = {
            'MADIEUTRI': ma_loai_dieu_tri[i],
            'TENLOAIDIEUTRI': ten_loai_dieu_tri[i],
            'GIA': fake.pyfloat(min_value=50, max_value=100, right_digits=2),
            'MDANHMUC': random.choice(danhmucdieutri_data)['MADANHMUC'],
        }
        loaidieutri_data.append(loaidieutri)


    # Kế Hoạch Điều Trị
    kehoachdieutri_data = []
    for i in range(start_index, start_index + num_kehoachdieutri):
        benh_nhan = random.choice(benhnhan_data)
        kehoachdieutri = {
            'IDDIEUTRI': f'KHDT{i:06d}',
            'MOTA': fake.sentence(),
            'TRANGTHAI': random.choice(['Kế hoạch', 'Đã hoàn thành', 'Đã hủy']),
            'GHICHU': fake.sentence() if random.choice([True, False]) else None,
            'TONGGIA': fake.pyfloat(min_value=1, max_value=1000, right_digits=2),

            'BENHNHAN': benh_nhan['IDBENHNHAN'],
            'BSPHUTRACH': benh_nhan['BACSIMD'],
        }
        kehoachdieutri_data.append(kehoachdieutri)
    
    # Buổi Điều Trị
    buoidieutri_data = []
    for i in range(start_index, start_index + num_buoidieutri):
        id_nhanvien_kc = random.choice([n['IDNHANVIEN'] for n in nhanvien_data if n['LOAINV'] == 'NS'])
        id_nhanvien_tk = random.choice([n['IDNHANVIEN'] for n in nhanvien_data if n['LOAINV'] == 'NS'])
        while id_nhanvien_kc == id_nhanvien_tk:
            id_nhanvien_tk = random.choice([n['IDNHANVIEN'] for n in nhanvien_data if n['LOAINV'] == 'NS'])
        
        buoidieutri = {
            'IDBUOIDIEUTRI': f'BDT{i:07d}',
            'MOTABDT': fake.sentence(),
            'GHICHUBDT': fake.sentence() if random.choice([True, False]) else None,
            'NGAYDT': fake.date_this_decade(),

            'TROKHAM': id_nhanvien_tk,
            'KHAMCHINH': id_nhanvien_kc,
            'BNKHAMLE': random.choice(benhnhan_data)['IDBENHNHAN'],
            'KEHOACHDT': random.choice(kehoachdieutri_data)['IDDIEUTRI'],
        }
        buoidieutri_data.append(buoidieutri)

    # Chi tiết điều trị
    chitietdieutri_data = []
    for i in range(start_index, start_index + num_chitietdieutri):
        ctdt = {
            'IDBUOIDIEUTRI': f'BDT{i:07d}',
            'MADIEUTRI': random.choice(loaidieutri_data)['MADIEUTRI'],
        }
        chitietdieutri_data.append(ctdt)
    
    # Chi tiết răng điều trị
    chitietrangdieutri_data = []
    danh_sach_rang = [
    "Răng cửa trên",
    "Răng cửa dưới",
    "Răng canh trên",
    "Răng canh dưới",
    "Răng nhai trên",
    "Răng nhai dưới",
    "Răng nhai trên",
    "Răng nhai dưới",
    "Răng mọc cuối cùng"
    ]
    for i in range(start_index, start_index + num_chitietrangdieutri):
        ctrdt = {
            'IDBUOIDIEUTRI': random.choice(buoidieutri_data)['IDBUOIDIEUTRI'],
            'MADIEUTRI': random.choice(loaidieutri_data)['MADIEUTRI'],
            'TENRANG': random.choice(danh_sach_rang),
            'MATDIEUTRI': random.choice(['L','F','D','M','T','R'])
        }
        chitietrangdieutri_data.append(ctrdt)
    # Đơn Thuốc
    donthuoc_data = []
    for i in range(start_index, start_index + num_donthuoc):
        # Chọn ngẫu nhiên một buổi điều trị
        buoi_dieu_tri = random.choice(buoidieutri_data)
        max_attempts = 25001  # Số lần kiểm tra tối đa
        attempts = 0
        # Kiểm tra xem đơn thuốc cho buổi điều trị này đã tồn tại chưa
        while any(donthuoc['IDBUOIDIEUTRI'] == buoi_dieu_tri['IDBUOIDIEUTRI'] for donthuoc in donthuoc_data):
            buoi_dieu_tri = random.choice(buoidieutri_data)
            attempts += 1
            if attempts >= max_attempts:
                break

        if attempts < max_attempts:        
            idbdt = buoi_dieu_tri["IDBUOIDIEUTRI"]
            donthuoc = {
                'IDDONTHUOC': f'ĐT{idbdt}',
                'NGAYCAP': buoi_dieu_tri['NGAYDT'],
                'IDBUOIDIEUTRI': idbdt,
            }
        donthuoc_data.append(donthuoc)

    # Thuốc
    thuoc_data = []
    ten_thuoc_list = ["Paradol Extra", "Penicillin G Mekophar", "Ibufenol", "Cephalexin Capsules", "Metformin HCl",
                    "Aspirin Plus", "Lisopram", "Simvatab", "Atorvozole", "Losartan Plus", "Levothyroxin Sodium",
                    "Fluoxaril", "Azithrocin", "Prednixone", "Warfarix", "Clopidox", "Diazepro", "Albuterix",
                    "Cefapro", "Doxycyclinol", "Hydrozide", "Gabapix", "Tramadex", "Pantoprazo", "Sertrax",
                    "Monteplus", "Acetaminophex", "Ibuplex", "AmoxiCap"]

    thanh_phan_list = ["Paracetamol, Caffeine", "Penicillin", "Ibuprofen, Paracetamol", "Cephalexin",
                    "Metformin", "Aspirin, Caffeine", "Lisinopril, Citalopram", "Simvastatin", "Atorvastatin",
                    "Losartan, Hydrochlorothiazide", "Levothyroxine", "Fluoxetine", "Azithromycin", "Prednisone",
                    "Warfarin", "Clopidogrel", "Diazepam", "Albuterol", "Cephalexin", "Doxycycline",
                    "Hydrochlorothiazide", "Gabapentin", "Tramadol", "Pantoprazole", "Sertraline", "Montelukast",
                    "Acetaminophen", "Ibuprofen", "Amoxicillin"]

    for i in range(len(ten_thuoc_list)):
        thuoc = {
            'IDTHUOC': f'DC{i+1:04d}',
            'TENTHUOC': ten_thuoc_list[i],
            'THANHPHAN': thanh_phan_list[i],
            'DONVITINH': random.choice(['ml', 'viên', 'g', 'liều', 'ống']),
            'GIATHUOC': fake.pyfloat(min_value=0, max_value=100, right_digits=2),
        }
        thuoc_data.append(thuoc)


    # Chi Tiết Đơn Thuốc
    chitietdonthuoc_data = []
    for i in range(start_index, start_index + num_chitietdonthuoc):
        chitietdonthuoc = {
            'IDTHUOC': random.choice(thuoc_data)['IDTHUOC'],
            'IDDONTHUOC': random.choice(donthuoc_data)['IDDONTHUOC'],
            'SOLUONG': random.randint(1, 10),
        }
        chitietdonthuoc_data.append(chitietdonthuoc)

    # Hóa đơn
    hoadon_data = []
    for i in range(start_index, start_index + num_hoadon):
        buoi_dieu_tri = random.choice(buoidieutri_data)
        random_date = buoi_dieu_tri['NGAYDT']
        so_ngay_ngau_nhien = fake.random_int(min=1, max=45)
        ngay_cap_hd = random_date + timedelta(days=so_ngay_ngau_nhien)
        tongtien = fake.pyfloat(min_value=1, max_value=1000, right_digits=2)
        ttien = int(round(tongtien))
        tiendatra = fake.pyfloat(min_value=0, max_value=ttien, right_digits=2)
        hoadon = {
            'IDHOADON': f'HĐ{ngay_cap_hd.strftime("%Y%m%d")}{i:05d}',
            'TONGTIEN': tongtien,
            'TIENDATRA': tiendatra,
            'LOAITHANHTOAN': random.choice(['Thanh toán online', 'Tiền mặt']),
            'GHICHUHOADON': fake.sentence() if random.choice([True, False]) else None,
            'NGAYGIAODICH': ngay_cap_hd.strftime("%Y-%m-%d"),

            'IDBENHNHAN': buoi_dieu_tri['BNKHAMLE'],
            'IDBUOIDIEUTRI': buoi_dieu_tri['IDBUOIDIEUTRI'],
            
        }
        hoadon_data.append(hoadon)

    # Ca làm
    calam_data = []
    ma_calam = ['C1', 'C2', 'C3', 'C4']
    khung_gio = ['1h-6h', '7h - 12h', '13h - 18h', '19h-0h']

    for i in range(len(ma_calam)):
        calam = {
            'IDCALAM': ma_calam[i],
            'KHUNGGIO': khung_gio[i],
        }
        calam_data.append(calam)

    
    # Lịch làm việc
    lichlamviec_data = []
    for i in range(start_index, start_index + num_lichlamviec):
        buoi_dieu_tri = random.choice(buoidieutri_data)
        ngay_lam_viec = buoi_dieu_tri['NGAYDT']
        nam, thang, ngay = ngay_lam_viec.strftime("%Y-%m-%d").split('-')
        lichlamviec = {
            'IDNHANVIEN': buoi_dieu_tri['KHAMCHINH'],
            'NGAY': ngay,
            'THANG': thang,
            'NAM': nam,

            'IDCALAM': random.choice(calam_data)['IDCALAM'],
            
        }
        lichlamviec_data.append(lichlamviec)
    
    # Lịch hẹn
    lichhen_data = []
    for i in range(start_index, start_index + num_lichhen):
        buoi_dieu_tri = random.choice(buoidieutri_data)
        hour = random.randint(8, 16)
        minute = random.choice([0,15,30,45])
        vaitro = random.choice(['BS','TK'])
        id_bs = 'TROKHAM'
        if vaitro == 'BS':
            id_bs = 'KHAMCHINH'
        lichhen = {
            'NGAYHEN': buoi_dieu_tri['NGAYDT'],
            'THOIGIANHEN': f'{hour}:{minute}',
            'TINHTRANG': random.choice(['CUỘC HẸN MỚI', 'TÁI KHÁM']),
            'PHONG': random.choice(phongkham_data)['IDPHONGKHAM'],
            'VAITRO': vaitro,
            'GHICHULICHHEN': fake.sentence() if random.choice([True, False]) else None,

            'BACSI': buoi_dieu_tri[id_bs],
            'IDBENHNHAN': buoi_dieu_tri['BNKHAMLE'],
            
        }
        lichhen_data.append(lichhen)
    # Hồ sơ bệnh nhân
    hosobenhnhan_data = []
    for i in range(start_index, start_index + num_hosobenhnhan):
        
        tongtienhsbn = fake.pyfloat(min_value=100, max_value=10000, right_digits=2)
        tienconlai = fake.pyfloat(min_value=0, max_value=tongtienhsbn, right_digits=2)
        hosobenhnhan = {
            'IDHOSO': f'HSBN{i:06d}',
            'TTTONGQUAN': fake.sentence(),
            'TINHTRANGDIUNG': fake.sentence(),
            'THUOCCHONGCHIDINH': random.choice(thuoc_data)['TENTHUOC'],
            'TONGTIEN': tongtienhsbn,
            'DATHANHTOAN': round(tongtienhsbn - tienconlai,2),

            'IDBENHNHAN': f'BN{i:06d}',
            
        }
        hosobenhnhan_data.append(hosobenhnhan)
    return nhanvien_data, benhnhan_data, phongkham_data, danhmucdieutri_data, loaidieutri_data, kehoachdieutri_data, buoidieutri_data, chitietdieutri_data, chitietrangdieutri_data, donthuoc_data, thuoc_data, chitietdonthuoc_data, hoadon_data, calam_data, lichlamviec_data, lichhen_data, hosobenhnhan_data

# Lưu dữ liệu vào các file Excel
import pandas as pd

def save_to_excel(nhanvien_data, benhnhan_data, phongkham_data, danhmucdieutri_data, loaidieutri_data, kehoachdieutri_data, buoidieutri_data, chitietdieutri_data, chitietrangdieutri_data, donthuoc_data, thuoc_data, chitietdonthuoc_data, hoadon_data, calam_data, lichlamviec_data, lichhen_data, hosobenhnhan_data):
    # Create DataFrames
    nhanvien_df = pd.DataFrame(nhanvien_data)
    benhnhan_df = pd.DataFrame(benhnhan_data)
    phongkham_df = pd.DataFrame(phongkham_data)
    danhmucdieutri_df = pd.DataFrame(danhmucdieutri_data)
    loaidieutri_df = pd.DataFrame(loaidieutri_data)
    kehoachdieutri_df = pd.DataFrame(kehoachdieutri_data)
    buoidieutri_df = pd.DataFrame(buoidieutri_data)
    chitietdieutri_df = pd.DataFrame(chitietdieutri_data)
    chitietrangdieutri_df = pd.DataFrame(chitietrangdieutri_data)
    donthuoc_df = pd.DataFrame(donthuoc_data)
    thuoc_df = pd.DataFrame(thuoc_data)
    chitietdonthuoc_df = pd.DataFrame(chitietdonthuoc_data)
    hoadon_df = pd.DataFrame(hoadon_data)
    lichlamviec_df = pd.DataFrame(lichlamviec_data)
    calam_df = pd.DataFrame(calam_data)
    lichhen_df = pd.DataFrame(lichhen_data)
    hosobenhnhan_df = pd.DataFrame(hosobenhnhan_data)

    # Save DataFrames to Excel with uppercase sheet names
    with pd.ExcelWriter('QuanLyPhongKham.xlsx', engine='openpyxl') as writer:
        nhanvien_df.to_excel(writer, sheet_name='NHANVIEN', index=False)
        benhnhan_df.to_excel(writer, sheet_name='BENHNHAN', index=False)
        phongkham_df.to_excel(writer, sheet_name='PHONGKHAM', index=False)
        danhmucdieutri_df.to_excel(writer, sheet_name='DANHMUCDIEUTRI', index=False)
        loaidieutri_df.to_excel(writer, sheet_name='LOAIDIEUTRI', index=False)
        kehoachdieutri_df.to_excel(writer, sheet_name='KEHOACHDIEUTRI', index=False)
        buoidieutri_df.to_excel(writer, sheet_name='BUOIDIEUTRI', index=False)
        chitietdieutri_df.to_excel(writer, sheet_name='CHITIETDIEUTRI', index=False)
        chitietrangdieutri_df.to_excel(writer, sheet_name='CHITIETRANGDIEUTRI', index=False)
        donthuoc_df.to_excel(writer, sheet_name='DONTHUOC', index=False)
        thuoc_df.to_excel(writer, sheet_name='THUOC', index=False)
        chitietdonthuoc_df.to_excel(writer, sheet_name='CHITIETDONTHUOC', index=False)
        hoadon_df.to_excel(writer, sheet_name='HOADON', index=False)
        lichlamviec_df.to_excel(writer, sheet_name='LICHLAMVIEC', index=False)
        calam_df.to_excel(writer, sheet_name='CALAM', index=False)
        lichhen_df.to_excel(writer, sheet_name='LICHHEN', index=False)
        hosobenhnhan_df.to_excel(writer, sheet_name='HOSOBENHNHAN', index=False)

        

# Tạo dữ liệu và lưu vào file Excel
nhanvien_data, benhnhan_data, phongkham_data, danhmucdieutri_data, loaidieutri_data, kehoachdieutri_data, buoidieutri_data, chitietdieutri_data, chitietrangdieutri_data, donthuoc_data, thuoc_data, chitietdonthuoc_data, hoadon_data, calam_data, lichlamviec_data, lichhen_data, hosobenhnhan_data = generate_data()
save_to_excel(nhanvien_data, benhnhan_data, phongkham_data, danhmucdieutri_data, loaidieutri_data, kehoachdieutri_data, buoidieutri_data, chitietdieutri_data, chitietrangdieutri_data, donthuoc_data, thuoc_data, chitietdonthuoc_data, hoadon_data, calam_data, lichlamviec_data, lichhen_data, hosobenhnhan_data)
