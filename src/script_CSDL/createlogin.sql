exec sp_addlogin 'ADMIN' ,'123456', 'QLPK_CSDL'
GO
EXEC sp_addsrvrolemember 'ADMIN','sysadmin'
go