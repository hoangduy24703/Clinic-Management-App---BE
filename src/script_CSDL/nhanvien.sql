USE QLPK_CSDL
GO

-- ĐĂNG KÝ NHÂN VIÊN
CREATE OR ALTER PROCEDURE dangky
    @SDT CHAR(8),
    @MATKHAU VARCHAR(10)
AS
BEGIN
    BEGIN TRY
        BEGIN TRAN;
        -- Kiểm tra xem tên người dùng đã tồn tại chưa
        IF EXISTS (SELECT 1 FROM NHANVIEN WHERE SODIENTHOAINV = @SDT)
        BEGIN
            PRINT 'Tên người dùng đã tồn tại';
            ROLLBACK;
            RETURN;
        END

        -- Thêm mới người dùng
        INSERT INTO NHANVIEN(SODIENTHOAINV, MATKHAU)
        VALUES (@SDT, @MATKHAU);
        COMMIT;
    END TRY
    BEGIN CATCH
        PRINT 'Lỗi hệ thống';
        ROLLBACK;
    END CATCH
END;

-- ĐĂNG NHẬP NHÂN VIÊN
GO

--ĐĂNG NHẬP
CREATE OR ALTER PROCEDURE dangnhap
    @SDT CHAR(10),
    @MATKHAU VARCHAR(10)
AS
BEGIN
    BEGIN TRY
        BEGIN TRAN;

        -- Kiểm tra xem người dùng có tồn tại và thông tin đúng không
        IF EXISTS (SELECT 1 FROM NHANVIEN WHERE SODIENTHOAINV = @SDT AND MATKHAU = @MATKHAU)
        BEGIN
			SELECT IDNHANVIEN, IDPHONGKHAM, LOAINV
			FROM NHANVIEN NV
			WHERE NV.SODIENTHOAINV = @SDT AND MATKHAU = @MATKHAU
            PRINT N'Đăng nhập thành công';
        END
        ELSE
        BEGIN
            PRINT N'Đăng nhập thất bại';
			ROLLBACK;
        END
        COMMIT;
    END TRY
    BEGIN CATCH
        PRINT 'Lỗi hệ thống';
        ROLLBACK;
    END CATCH
END;


--XEM DANH SÁCH NHÂN VIÊN
GO

--XEMDANHSACHNHANVIEN
CREATE OR ALTER PROC xemdanhsachnhanvien 
AS
BEGIN
	BEGIN TRY
		BEGIN TRAN 
			SELECT * FROM NHANVIEN
		COMMIT TRAN
	END TRY
	BEGIN CATCH
			PRINT N'LỖI HỆ THỐNG'
			ROLLBACK TRAN
	END CATCH
END

